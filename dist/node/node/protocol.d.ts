import { BinaryMessage, BinaryMessageType } from "../protocol_base.js";
export type BinaryDataMessage = BinaryMessage<{
    ack: number;
    payload: Buffer;
}, BinaryMessageType.BINARYDATA>;
export type TXChunkMessage = BinaryMessage<{
    txId: number;
    payload: Buffer;
}, BinaryMessageType.TX_CHUNK>;
//# sourceMappingURL=protocol.d.ts.map