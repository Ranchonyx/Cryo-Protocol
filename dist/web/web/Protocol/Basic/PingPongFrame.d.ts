import { PingMessage } from "../../../protocol_base.js";
import { CryoBuffer } from "../../CryoBuffer.js";
export declare class PingPongFrame {
    static Deserialize(value: CryoBuffer): PingMessage;
    static Serialize(sid: bigint, ack: number, payload: "ping" | "pong"): CryoBuffer;
}
//# sourceMappingURL=PingPongFrame.d.ts.map