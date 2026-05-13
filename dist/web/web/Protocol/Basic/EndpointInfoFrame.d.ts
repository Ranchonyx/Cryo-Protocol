import { EndpointInfoMessage } from "../../../protocol_base.js";
import { CryoBuffer } from "../../CryoBuffer.js";
export declare class EndpointInfoFrame {
    static Deserialize(value: CryoBuffer): EndpointInfoMessage;
    static Serialize(sid: bigint, ack: number): CryoBuffer;
}
//# sourceMappingURL=EndpointInfoFrame.d.ts.map