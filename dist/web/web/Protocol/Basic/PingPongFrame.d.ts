import { PingMessage, UUID } from "../../../agnostic/protocol_agnostic.js";
import { CryoBuffer } from "../CryoBuffer.js";
export declare class PingPongFrame {
    static Deserialize(value: CryoBuffer): PingMessage;
    static Serialize(sid: UUID, ack: number, payload: "ping" | "pong"): CryoBuffer;
}
//# sourceMappingURL=PingPongFrame.d.ts.map