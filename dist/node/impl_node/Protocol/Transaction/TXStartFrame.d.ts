import { TXStartMessage, UUID } from "../../../agnostic/protocol_agnostic.js";
export declare class TXStartFrame {
    static Deserialize(value: Buffer): TXStartMessage;
    static Serialize(sid: UUID, ack: number, txId: number, name: string): Buffer;
}
//# sourceMappingURL=TXStartFrame.d.ts.map