import { CryoBuffer } from "../CryoBuffer.js";
import { TXChunkMessage } from "../../protocol.js";
import { UUID } from "../../../agnostic/protocol_agnostic.js";
export declare class TXChunkFrame {
    static Deserialize(value: CryoBuffer): TXChunkMessage;
    static Serialize(sid: UUID, txId: number, payload: CryoBuffer): CryoBuffer;
}
//# sourceMappingURL=TXChunkFrame.d.ts.map