import { ErrorMessage } from "../../../protocol_base.js";
export declare class ErrorFrame {
    static Deserialize(value: Buffer): ErrorMessage;
    static Serialize(sid: bigint, ack: number, payload: string | null): Buffer;
}
//# sourceMappingURL=ErrorFrame.d.ts.map