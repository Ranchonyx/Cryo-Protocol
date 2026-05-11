import { TXFinishMessage, UUID } from "../../../agnostic/protocol_agnostic.js";
export declare class TXFinishFrame {
    static Deserialize(value: Buffer): TXFinishMessage;
    static Serialize(sid: UUID, ack: number, txId: number): Buffer;
}
//# sourceMappingURL=TXFinishFrame.d.ts.map