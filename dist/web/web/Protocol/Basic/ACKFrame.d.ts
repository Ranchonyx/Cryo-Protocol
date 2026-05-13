import { AckMessage } from "../../../protocol_base.js";
import { CryoBuffer } from "../../CryoBuffer.js";
export declare class ACKFrame {
    static Deserialize(value: CryoBuffer): AckMessage;
    static Serialize(sid: bigint, ack: number): CryoBuffer;
}
//# sourceMappingURL=ACKFrame.d.ts.map