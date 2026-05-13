import { BinaryDataMessage } from "../../protocol.js";
import { CryoBuffer } from "../../CryoBuffer.js";
export declare class BinaryDataFrame {
    static Deserialize(value: CryoBuffer): BinaryDataMessage;
    static Serialize(sid: bigint, ack: number, payload: CryoBuffer | null): CryoBuffer;
}
//# sourceMappingURL=BinaryDataFrame.d.ts.map