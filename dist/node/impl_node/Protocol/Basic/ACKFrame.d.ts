import { AckMessage, UUID } from "../../../agnostic/protocol_agnostic.js";
export declare class ACKFrame {
    static Deserialize(value: Buffer): AckMessage;
    static Serialize(sid: UUID, ack: number): Buffer;
}
//# sourceMappingURL=ACKFrame.d.ts.map