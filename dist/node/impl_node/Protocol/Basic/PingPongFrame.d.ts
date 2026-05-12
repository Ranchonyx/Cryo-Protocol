import { PingMessage, UUID } from "../../../agnostic/protocol_agnostic.js";
export declare class PingPongFrame {
    static Deserialize(value: Buffer): PingMessage;
    static Serialize(sid: UUID, ack: number, payload: "ping" | "pong"): Buffer;
}
//# sourceMappingURL=PingPongFrame.d.ts.map