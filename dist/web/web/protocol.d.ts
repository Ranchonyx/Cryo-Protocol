import { BinaryMessage, BinaryMessageType } from "../protocol_base.js";
import { CryoBuffer } from "./CryoBuffer.js";
export type BinaryDataMessage = BinaryMessage<{
    ack: number;
    payload: CryoBuffer;
}, BinaryMessageType.BINARYDATA>;
export type TXChunkMessage = BinaryMessage<{
    txId: number;
    payload: CryoBuffer;
}, BinaryMessageType.TX_CHUNK>;
//# sourceMappingURL=protocol.d.ts.map