import { CryoBuffer } from "../CryoBuffer.js";
import { AckMessage, UUID } from "../../../agnostic/protocol_agnostic.js";
export declare class ACKFrame {
    static Deserialize(value: CryoBuffer): AckMessage;
    static Serialize(sid: UUID, ack: number): CryoBuffer;
}
//# sourceMappingURL=ACKFrame.d.ts.map