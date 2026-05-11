import { UUID, ErrorMessage } from "../../../agnostic/protocol_agnostic.js";
export declare class ErrorFrame {
    static Deserialize(value: Buffer): ErrorMessage;
    static Serialize(sid: UUID, ack: number, payload: ErrorMessage["payload"] | null): Buffer;
}
//# sourceMappingURL=ErrorFrame.d.ts.map