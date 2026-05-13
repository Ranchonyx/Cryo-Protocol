import { BinaryMessageType, DeserializationError, CRYO_MAX_PAYLOAD, SerializationError } from "../../../protocol_base.js";
import { CryoBuffer } from "../../CryoBuffer.js";
export class ErrorFrame {
    static Deserialize(value) {
        const sid = value.readBigUInt64BE(0);
        const type = value.readUint8(8);
        const ack = value.readUInt32BE(9);
        const payload = value.subarray(13).toString("utf8");
        if (type !== BinaryMessageType.ERROR)
            throw new DeserializationError("Attempt to deserialize a non-error message!");
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
        const msg_buf = CryoBuffer.alloc(8 + 4 + 1 + err_len);
        msg_buf.writeBigUInt64BE(sid, 0);
        msg_buf.writeUint8(BinaryMessageType.ERROR, 8);
        msg_buf.writeUInt32BE(ack, 9);
        msg_buf.write(payload || "unknown_error", 13);
        return msg_buf;
    }
}
//# sourceMappingURL=ErrorFrame.js.map