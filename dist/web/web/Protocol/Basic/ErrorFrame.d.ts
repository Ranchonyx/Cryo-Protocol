import { ErrorMessage } from "../../../protocol_base.js";
import { CryoBuffer } from "../../CryoBuffer.js";
export declare class ErrorFrame {
    static Deserialize(value: CryoBuffer): ErrorMessage;
    static Serialize(sid: bigint, ack: number, payload: string | null): CryoBuffer;
}
//# sourceMappingURL=ErrorFrame.d.ts.map