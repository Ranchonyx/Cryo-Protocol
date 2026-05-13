import { TXFlowBehaviour, TXFlowMessage } from "../../../protocol_base.js";
export declare class TXFlowFrame {
    static Deserialize(value: Buffer): TXFlowMessage;
    static Serialize(sid: bigint, ack: number, behaviour: TXFlowBehaviour): Buffer;
}
//# sourceMappingURL=TXFlowFrame.d.ts.map