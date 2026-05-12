import { BinaryMessageType, UUID } from "../agnostic/protocol_agnostic.js";
export declare class BufferUtil {
    static sidFromBuffer(buffer: Buffer): UUID;
    static sidToBuffer(sid: UUID): Buffer;
    static GetType(message: Buffer): BinaryMessageType;
    static GetAck(message: Buffer): number;
    static GetSid(message: Buffer): UUID;
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