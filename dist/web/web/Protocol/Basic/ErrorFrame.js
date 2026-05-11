import { CryoBuffer } from "../CryoBuffer.js";
import { BinaryMessageType, CRYO_MAX_PAYLOAD, DeserializationError, SerializationError } from "../../../agnostic/protocol_agnostic.js";
import { BufferUtil } from "../../BufferUtil.js";
export class ErrorFrame {
    static Deserialize(value) {
        const sid = BufferUtil.sidFromBuffer(value);
        const type = value.readUint8(16);
        const ack = value.readUint32BE(17);
        const payload = value.subarray(21).toString("utf8");
        if (type !== BinaryMessageType.ERROR)
            throw new DeserializationError("Attempt to deserialize a non-error frame!");
        return {
            sid,
            ack,
            type,
            payload
        };
    }
    static Serialize(sid, ack, payload) {
        const err_len = payload?.length ? payload.length : 13;
        if (err_len > CRYO_MAX_PAYLOAD)
            throw new SerializationError(`Payload size of ${CRYO_MAX_PAYLOAD} bytes exceeded!`);
        const msg_buf = CryoBuffer.alloc(16 + 4 + 1 + err_len);
        const sid_buf = BufferUtil.sidToBuffer(sid);
        sid_buf.copy(msg_buf, 0);
        msg_buf.writeUint8(BinaryMessageType.ERROR, 16);
        msg_buf.writeUint32BE(ack, 17);
        msg_buf.write(payload || "unknown_error", 21);
        return msg_buf;
    }
}
//# sourceMappingURL=ErrorFrame.js.map