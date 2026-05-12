import { UUID } from "../../../agnostic/protocol_agnostic.js";
import { BinaryDataMessage } from "../../protocol.js";
export declare class BinaryDataFrame {
    static Deserialize(value: Buffer): BinaryDataMessage;
    static Serialize(sid: UUID, ack: number, payload: Buffer | null): Buffer;
}
//# sourceMappingURL=BinaryDataFrame.d.ts.map