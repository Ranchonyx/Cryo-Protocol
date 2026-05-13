import { TXStartMessage } from "../../../protocol_base.js";
export declare class TXStartFrame {
    static Deserialize(value: Buffer): TXStartMessage;
    static Serialize(sid: bigint, ack: number, txId: number, name: string): Buffer;
}
//# sourceMappingURL=TXStartFrame.d.ts.map