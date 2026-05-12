# Frames

### Cryo.Base
```
FrameType :=
    ACK = 0,
    ERROR = 1,
    PING_PONG = 2,
    UTF8DATA = 3,
    BINARYDATA = 4

uuidv4 :=
    byte[4]-byte[2]-byte[2]-byte[2]-byte[6]

CRYO_MAX_PAYLOAD :=
    16 * 1024 * 1024

ACKFrame := [
    sid:    uuidv4  / byte[16],
    type:   0x00    / byte[1],
    ack:    uint32  / byte[4],
]

ErrorFrame := [
    sid:        uuidv4  / byte[16],
    type:       0x01    / byte[1],
    ack:        uint32  / byte[4],
    payload:    string  / byte[n..CRYO_MAX_PAYLOAD]
]

PingPongFrame := [
    sid:        uuidv4      / byte[16],
    type:       0x02        / byte[1],
    ack:        uint32      / byte[4],
    payload:    ping | pong / byte[4]
]

Utf8DataFrame := [
    sid:        uuidv4  / byte[16],
    type:       0x03    / byte[1],
    ack:        uint32  / byte[4],
    payload:    string  / byte[n..CRYO_MAX_PAYLOAD]
]

BinaryDataFrame := [
    sid:        uuidv4  / byte[16],
    type:       0x04    / byte[1],
    ack:        uint32  / byte[4],
    payload:    binary  / byte[n..CRYO_MAX_PAYLOAD]
]
```

### Cryo.Transaction
```
FrameType :=
    TX_START = 5,
    TX_CHUNK = 6,
    TX_FINISH = 7
    

TXStartFrame = [
    sid:        uuidv4  / byte[16],
    type:       0x05    / byte[1],
    ack:        uint32  / byte[4],
    txid:       uint32  / byte[4],
    name:       string  / byte[n..CRYO_MAX_PAYLOAD]
]

TXStartFrame = [
    sid:        uuidv4  / byte[16],
    type:       0x06    / byte[1],
    txid:       uint32  / byte[4],
    name:       string  / byte[n..CRYO_MAX_PAYLOAD],
    payload:    binary  / byte[n..CRYO_MAX_PAYLOAD]
]

TXFinishFrame = [
    sid:        uuidv4  / byte[16],
    type:       0x07    / byte[1],
    ack:        uint32  / byte[4],
    txid:       uint32  / byte[4]
]
```