import { CryoBuffer } from "../CryoBuffer.js";
import { ErrorMessage, UUID } from "../../../agnostic/protocol_agnostic.js";
export declare class ErrorFrame {
    static Deserialize(value: CryoBuffer): ErrorMessage;
    static Serialize(sid: UUID, ack: number, payload: string | null): CryoBuffer;
}
//# sourceMappingURL=ErrorFrame.d.ts.map