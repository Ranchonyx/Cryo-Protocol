import { BinaryMessageType, DeserializationError, CRYO_MAX_PAYLOAD, SerializationError } from "../../../protocol_base.js";
import { CryoBuffer } from "../../CryoBuffer.js";
export class ByeFrame {
    static Deserialize(value) {
        const sid = value.readBigUInt64BE(0);
        const type = value.readUint8(8);
        const ack = value.readUInt32BE(9);
        const reason = value.subarray(13).toString("utf8");
        if (type !== BinaryMessageType.BYE)
            throw new DeserializationError("Attempt to deserialize a non-bye message!");
        return {
            sid,
            ack,
            type,
            reason
        };
    }
    static Serialize(sid, ack, reason) {
        const reasonLen = reason?.length ? reason.length : 10;
        if (reasonLen > CRYO_MAX_PAYLOAD)
            throw new SerializationError(`Payload size of ${CRYO_MAX_PAYLOAD} bytes exceeded!`);
        const msg_buf = CryoBuffer.alloc(8 + 1 + 4 + reasonLen);
        msg_buf.writeBigUInt64BE(sid, 0);
        msg_buf.writeUint8(BinaryMessageType.BYE, 8);
        msg_buf.writeUInt32BE(ack, 9);
        msg_buf.write(reason || "disconnect", 13);
        return msg_buf;
    }
}
//# sourceMappingURL=ByeFrame.js.map