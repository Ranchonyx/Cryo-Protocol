import { AckMessage } from "../../../protocol_base.js";
export declare class ACKFrame {
    static Deserialize(value: Buffer): AckMessage;
    static Serialize(sid: bigint, ack: number): Buffer;
}
//# sourceMappingURL=ACKFrame.d.ts.map