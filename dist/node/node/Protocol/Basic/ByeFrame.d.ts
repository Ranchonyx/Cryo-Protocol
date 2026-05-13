import { ByeMessage } from "../../../protocol_base.js";
export declare class ByeFrame {
    static Deserialize(value: Buffer): ByeMessage;
    static Serialize(sid: bigint, ack: number, reason: string | null): Buffer;
}
//# sourceMappingURL=ByeFrame.d.ts.map