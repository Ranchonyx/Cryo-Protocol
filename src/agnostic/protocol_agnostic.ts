export const CRYO_MAX_PAYLOAD = 16 * 1024 * 1024;

export class DeserializationError extends Error {
    public constructor(pMessage: string) {
        super(`Frame deserialization failed: ${pMessage}`);
        Object.setPrototypeOf(this, DeserializationError.prototype);
    }
}

export class SerializationError extends Error {
    public constructor(pMessage: string) {
        super(`Frame serialization failed: ${pMessage}`);
        Object.setPrototypeOf(this, SerializationError.prototype);
    }
}


export enum BinaryMessageType {
    ACK = 0,
    ERROR = 1,
    PING_PONG = 2,
    UTF8DATA = 3,
    BINARYDATA = 4,
    TX_START = 5,
    TX_CHUNK = 6,
    TX_FINISH = 7
}

export type BufferEncoding = "utf8" | "hex";

export type UUID = `${string}-${string}-${string}-${string}-${string}`;

export type BinaryMessage<T, U extends BinaryMessageType> = {
    sid: UUID;
    type: U;
} & T;

export type AckMessage = BinaryMessage<{
    ack: number;
}, BinaryMessageType.ACK>;

export type PingMessage = BinaryMessage<{
    ack: number;
    payload: "ping" | "pong";
}, BinaryMessageType.PING_PONG>;

export type UTF8DataMessage = BinaryMessage<{
    ack: number;
    payload: string;
}, BinaryMessageType.UTF8DATA>;

export type TXStartMessage = BinaryMessage<{
    ack: number;
    txId: number;
    txName: string;
}, BinaryMessageType.TX_START>;

export type TXFinishMessage = BinaryMessage<{
    ack: number;
    txId: number;
}, BinaryMessageType.TX_FINISH>;

export type ErrorMessage = BinaryMessage<{
    ack: number;
    payload: string;
}, BinaryMessageType.ERROR>;