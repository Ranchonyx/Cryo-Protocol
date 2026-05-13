import { UTF8DataMessage } from "../../../protocol_base.js";
export declare class Utf8DataFrame {
    static Deserialize(value: Buffer): UTF8DataMessage;
    static Serialize(sid: bigint, ack: number, payload: string | null): Buffer;
}
//# sourceMappingURL=Utf8DataFrame.d.ts.map