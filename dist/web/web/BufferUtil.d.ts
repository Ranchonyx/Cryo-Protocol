import { CryoBuffer } from "./CryoBuffer.js";
import { BinaryMessageType, BufferEncoding } from "../protocol_base.js";
export declare class BufferUtil {
    static GetType(message: CryoBuffer): BinaryMessageType;
    static GetAck(message: CryoBuffer): number;
    static GetSid(message: CryoBuffer): bigint;
    static GetPayload(message: CryoBuffer, encoding: BufferEncoding): string;
    static Transaction: {
        new (): {};
        GetChunkTxId(message: CryoBuffer): number;
        GetChunkPayload(message: CryoBuffer, encoding: BufferEncoding): string;
        GetTxId(message: CryoBuffer): number;
        GetTxName(message: CryoBuffer, encoding?: "utf8" | "hex"): string;
    };
}
//# sourceMappingURL=BufferUtil.d.ts.map