import { EndpointInfoMessage } from "../../../protocol_base.js";
export declare class EndpointInfoFrame {
    static Deserialize(value: Buffer): EndpointInfoMessage;
    static Serialize(sid: bigint, ack: number): Buffer;
}
//# sourceMappingURL=EndpointInfoFrame.d.ts.map