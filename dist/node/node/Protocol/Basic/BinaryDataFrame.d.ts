import { BinaryDataMessage } from "../../protocol.js";
export declare class BinaryDataFrame {
    static Deserialize(value: Buffer): BinaryDataMessage;
    static Serialize(sid: bigint, ack: number, payload: Buffer | null): Buffer;
}
//# sourceMappingURL=BinaryDataFrame.d.ts.map