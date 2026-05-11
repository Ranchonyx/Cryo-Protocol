import {BinaryMessage, BinaryMessageType} from "../agnostic/protocol_agnostic.js";

export type BinaryDataMessage = BinaryMessage<{
    ack: number;
    payload: Buffer;
}, BinaryMessageType.BINARYDATA>;


export type TXChunkMessage = BinaryMessage<{
    txId: number;
    payload: Buffer;
}, BinaryMessageType.TX_CHUNK>;