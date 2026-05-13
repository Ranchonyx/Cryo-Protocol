import { TXFinishMessage } from "../../../protocol_base.js";
export declare class TXFinishFrame {
    static Deserialize(value: Buffer): TXFinishMessage;
    static Serialize(sid: bigint, ack: number, txId: number): Buffer;
}
//# sourceMappingURL=TXFinishFrame.d.ts.map