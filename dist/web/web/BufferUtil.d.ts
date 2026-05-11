import { CryoBuffer } from "./Protocol/CryoBuffer.js";
import { BinaryMessageType, BufferEncoding, UUID } from "../agnostic/protocol_agnostic.js";
export declare class BufferUtil {
    static sidFromBuffer(buffer: CryoBuffer): UUID;
    static sidToBuffer(sid: UUID): CryoBuffer;
    static GetType(message: CryoBuffer): BinaryMessageType;
    static GetAck(message: CryoBuffer): number;
    static GetSid(message: CryoBuffer): UUID;
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