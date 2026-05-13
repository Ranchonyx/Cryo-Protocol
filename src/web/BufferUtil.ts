import {CryoBuffer} from "./CryoBuffer.js";
import {BinaryMessageType, BufferEncoding} from "../protocol_base.js";

export class BufferUtil {
    public static GetType(message: CryoBuffer): BinaryMessageType {
        const type = message.readUint8(16);
        if (type > 0xff)
            throw new Error(`Unable to decode type from message ${message}. MAX_TYPE = 255, got ${type} !`);

        return type;
    }

    public static GetAck(message: CryoBuffer): number {
        return message.readUInt32BE(17);
    }

    public static GetSid(message: CryoBuffer): bigint {
        return message.readBigUInt64BE(0);
    }

    public static GetPayload(message: CryoBuffer, encoding: BufferEncoding): string {
        return message.subarray(21).toString(encoding);
    }

    public static Transaction = class {
        public static GetChunkTxId(message: CryoBuffer) {
            return message.readUInt32BE(17);
        }

        public static GetChunkPayload(message: CryoBuffer, encoding: BufferEncoding): string {
            return message.subarray(21).toString(encoding);
        }

        public static GetTxId(message: CryoBuffer) {
            return message.readUInt32BE(21);
        }

        public static GetTxName(message: CryoBuffer, encoding: "utf8" | "hex" = "utf8") {
            return message.subarray(25).toString(encoding);
        }
    }
}