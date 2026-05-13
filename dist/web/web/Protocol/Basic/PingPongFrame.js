import { BinaryMessageType, DeserializationError } from "../../../protocol_base.js";
import { CryoBuffer } from "../../CryoBuffer.js";
export class PingPongFrame {
    static Deserialize(value) {
        const sid = value.readBigUInt64BE(0);
        const type = value.readUint8(8);
        const ack = value.readUInt32BE(9);
        const payload = value.subarray(13).toString("utf8");
        if (type !== BinaryMessageType.PING_PONG)
            throw new DeserializationError("Attempt to deserialize a non-ping_pong binary message!");
        if (!(payload === "ping" || payload === "pong"))
            throw new DeserializationError(`Invalid payload ${payload} in ping_pong binary message!`);
        return {
            sid,
            ack,
            type,
            payload
        };
    }
    static Serialize(sid, ack, payload) {
        const msg_buf = CryoBuffer.alloc(8 + 4 + 1 + 4);
        msg_buf.writeBigUInt64BE(sid, 0);
        msg_buf.writeUint8(BinaryMessageType.PING_PONG, 8);
        msg_buf.writeUInt32BE(ack, 9);
        msg_buf.write(payload, 13);
        return msg_buf;
    }
}
//# sourceMappingURL=PingPongFrame.js.map