import { CryoBuffer } from "../CryoBuffer.js";
import { UTF8DataMessage, UUID } from "../../../agnostic/protocol_agnostic.js";
export declare class Utf8DataFrame {
    static Deserialize(value: CryoBuffer): UTF8DataMessage;
    static Serialize(sid: UUID, ack: number, payload: string | null): CryoBuffer;
}
//# sourceMappingURL=Utf8DataFrame.d.ts.map