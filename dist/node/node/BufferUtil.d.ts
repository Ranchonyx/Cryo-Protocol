import { BinaryMessageType } from "../protocol_base.js";
export declare class BufferUtil {
    static GetType(message: Buffer): BinaryMessageType;
    static GetAck(message: Buffer): number;
    static GetSid(message: Buffer): bigint;
    static GetPayload(message: Buffer, encoding?: BufferEncoding): string;
    static Transaction: {
        new (): {};
        GetChunkTxId(message: Buffer): number;
        GetChunkPayload(message: Buffer, encoding?: BufferEncoding): string;
        GetTxId(message: Buffer): number;
        GetTxName(message: Buffer, encoding?: BufferEncoding): string;
    };
}
//# sourceMappingURL=BufferUtil.d.ts.map