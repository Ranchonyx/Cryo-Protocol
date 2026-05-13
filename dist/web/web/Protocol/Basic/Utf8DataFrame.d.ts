import { UTF8DataMessage } from "../../../protocol_base.js";
import { CryoBuffer } from "../../CryoBuffer.js";
export declare class Utf8DataFrame {
    static Deserialize(value: CryoBuffer): UTF8DataMessage;
    static Serialize(sid: bigint, ack: number, payload: string | null): CryoBuffer;
}
//# sourceMappingURL=Utf8DataFrame.d.ts.map