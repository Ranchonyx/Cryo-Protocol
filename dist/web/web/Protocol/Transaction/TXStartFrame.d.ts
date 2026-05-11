import { CryoBuffer } from "../CryoBuffer.js";
import { TXStartMessage, UUID } from "../../../agnostic/protocol_agnostic.js";
export declare class TXStartFrame {
    static Deserialize(value: CryoBuffer): TXStartMessage;
    static Serialize(sid: UUID, ack: number, txId: number, name: string): CryoBuffer;
}
//# sourceMappingURL=TXStartFrame.d.ts.map