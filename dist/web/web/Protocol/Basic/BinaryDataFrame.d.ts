import { CryoBuffer } from "../CryoBuffer.js";
import { BinaryDataMessage } from "../../protocol.js";
import { UUID } from "../../../agnostic/protocol_agnostic.js";
export declare class BinaryDataFrame {
    static Deserialize(value: CryoBuffer): BinaryDataMessage;
    static Serialize(sid: UUID, ack: number, payload: CryoBuffer | null): CryoBuffer;
}
//# sourceMappingURL=BinaryDataFrame.d.ts.map