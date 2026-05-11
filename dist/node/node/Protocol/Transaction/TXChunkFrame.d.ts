import { TXChunkMessage } from "../../protocol.js";
import { UUID } from "../../../agnostic/protocol_agnostic.js";
export declare class TXChunkFrame {
    static Deserialize(value: Buffer): TXChunkMessage;
    static Serialize(sid: UUID, txId: number, payload: Buffer): Buffer;
}
//# sourceMappingURL=TXChunkFrame.d.ts.map