import {BinaryMessageType, DeserializationError, PingMessage} from "../../../protocol_base.js";


export class PingPongFrame {
    public static Deserialize(value: Buffer): PingMessage {
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
        }
    }

    public static Serialize(sid: bigint, ack: number, payload: "ping" | "pong"): Buffer {
        const msg_buf = Buffer.alloc(8 + 4 + 1 + 4);

        msg_buf.writeBigUInt64BE(sid, 0);
        msg_buf.writeUint8(BinaryMessageType.PING_PONG, 8);
        msg_buf.writeUInt32BE(ack, 9);
        msg_buf.write(payload, 13);

        return msg_buf;
    }
}