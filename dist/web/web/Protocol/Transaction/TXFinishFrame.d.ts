import { TXFinishMessage, UUID } from "../../../agnostic/protocol_agnostic.js";
import { CryoBuffer } from "../CryoBuffer.js";
export declare class TXFinishFrame {
    static Deserialize(value: CryoBuffer): TXFinishMessage;
    static Serialize(sid: UUID, ack: number, txId: number): CryoBuffer;
}
//# sourceMappingURL=TXFinishFrame.d.ts.map