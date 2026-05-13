import {BinaryMessageType, DeserializationError, TXStartMessage} from "../../../protocol_base.js";


export class TXStartFrame {
    public static Deserialize(value: Buffer): TXStartMessage {
        const sid = value.readBigUInt64BE(0);
        const type = value.readUint8(8);
        const ack = value.readUInt32BE(9);
        const txId = value.readUInt32BE(13);
        const txName = value.subarray(17).toString("utf8");

        if (type !== BinaryMessageType.TX_START)
            throw new DeserializationError("Attempt to deserialize a non-tx_start message!");

        return {
            sid,
            ack,
            type,
            txId,
            txName
        }
    }

    public static Serialize(sid: bigint, ack: number, txId: number, name: string): Buffer {
        const msg_buf = Buffer.alloc(8 + 4 + 1 + 4 + Buffer.from(name, "utf8").byteLength);

        msg_buf.writeBigUInt64BE(sid, 0);
        msg_buf.writeUint8(BinaryMessageType.TX_START, 8);
        msg_buf.writeUInt32BE(ack, 9);
        msg_buf.writeUInt32BE(txId, 13);
        msg_buf.set(Buffer.from(name, "utf8"), 17)

        return msg_buf;
    }
}
