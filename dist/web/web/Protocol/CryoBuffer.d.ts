export declare class CryoBuffer {
    buffer: Uint8Array;
    private view;
    constructor(buffer: Uint8Array);
    static alloc(length: number): CryoBuffer;
    static from(input: string, encoding?: "utf8" | "hex"): CryoBuffer;
    static concat(buffers: CryoBuffer[]): CryoBuffer;
    writeUint32BE(value: number, offset: number): void;
    writeUint8(value: number, offset: number): void;
    readUint32BE(offset: number): number;
    readUint8(offset: number): number;
    write(text: string, offset?: number): void;
    set(buffer: CryoBuffer, offset: number): void;
    toString(encoding?: "utf8" | "hex"): string;
    subarray(start: number, end?: number): CryoBuffer;
    copy(target: CryoBuffer, target_start?: number): void;
    get byteLength(): number;
}
//# sourceMappingURL=CryoBuffer.d.ts.map