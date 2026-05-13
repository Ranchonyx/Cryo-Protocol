import { TXFinishMessage } from "../../../protocol_base.js";
import { CryoBuffer } from "../../CryoBuffer.js";
export declare class TXFinishFrame {
    static Deserialize(value: CryoBuffer): TXFinishMessage;
    static Serialize(sid: bigint, ack: number, txId: number): CryoBuffer;
}
//# sourceMappingURL=TXFinishFrame.d.ts.map