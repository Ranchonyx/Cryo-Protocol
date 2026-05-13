import { TXFlowBehaviour, TXFlowMessage } from "../../../protocol_base.js";
import { CryoBuffer } from "../../CryoBuffer.js";
export declare class TXFlowFrame {
    static Deserialize(value: CryoBuffer): TXFlowMessage;
    static Serialize(sid: bigint, ack: number, behaviour: TXFlowBehaviour): CryoBuffer;
}
//# sourceMappingURL=TXFlowFrame.d.ts.map