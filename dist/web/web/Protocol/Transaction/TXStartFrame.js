import { CryoBuffer } from "../CryoBuffer.js";
import { BinaryMessageType, CRYO_MAX_PAYLOAD, SerializationError } from "../../../agnostic/protocol_agnostic.js";
import { BufferUtil } from "../../BufferUtil.js";
export class TXStartFrame {
    static Deserialize(value) {
        const sid = BufferUtil.sidFromBuffer(value);
        const type = value.readUint8(16);
        const ack = value.readUint32BE(17);
        const txId = value.readUint32BE(21);
        const txName = value.subarray(25).toString("utf8");
        if (type !== BinaryMessageType.TX_START)
            throw new SerializationError("Attempt to deserialize a non-tx_start frame!");
        return {
            sid,
            ack,
            type,
            txId,
            txName
        };
    }
    static Serialize(sid, ack, txId, name) {
        const nameBuf = CryoBuffer.from(name, "utf8");
        if (nameBuf.byteLength > CRYO_MAX_PAYLOAD)
            throw new SerializationError(`Payload size of ${CRYO_MAX_PAYLOAD} bytes exceeded!`);
        const msg_buf = CryoBuffer.alloc(16 + 4 + 1 + 4 + nameBuf.byteLength);
        const sid_buf = BufferUtil.sidToBuffer(sid);
        sid_buf.copy(msg_buf, 0);
        msg_buf.writeUint8(BinaryMessageType.TX_START, 16);
        msg_buf.writeUint32BE(ack, 17);
        msg_buf.writeUint32BE(txId, 21);
        msg_buf.set(CryoBuffer.from(name, "utf8"), 25);
        return msg_buf;
    }
}
//# sourceMappingURL=TXStartFrame.js.map