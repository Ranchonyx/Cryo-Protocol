import { ByeMessage } from "../../../protocol_base.js";
import { CryoBuffer } from "../../CryoBuffer.js";
export declare class ByeFrame {
    static Deserialize(value: CryoBuffer): ByeMessage;
    static Serialize(sid: bigint, ack: number, reason: string | null): CryoBuffer;
}
//# sourceMappingURL=ByeFrame.d.ts.map