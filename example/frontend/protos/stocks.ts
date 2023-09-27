// @generated by protobuf-ts 2.9.1
// @generated from protobuf file "stocks.proto" (package "stocks", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message stocks.Empty
 */
export interface Empty {
}
/**
 * @generated from protobuf message stocks.StocksList
 */
export interface StocksList {
    /**
     * @generated from protobuf field: repeated stocks.Stock stocks = 1;
     */
    stocks: Stock[];
}
/**
 * @generated from protobuf message stocks.Stock
 */
export interface Stock {
    /**
     * @generated from protobuf field: string symbol = 1;
     */
    symbol: string;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: float price = 3;
     */
    price: number;
    /**
     * @generated from protobuf field: string time = 4;
     */
    time: string;
}
/**
 * @generated from protobuf message stocks.StockSymbol
 */
export interface StockSymbol {
    /**
     * @generated from protobuf field: string symbol = 1;
     */
    symbol: string;
}
/**
 * @generated from protobuf message stocks.User
 */
export interface User {
    /**
     * @generated from protobuf field: string username = 1;
     */
    username: string;
}
/**
 * @generated from protobuf message stocks.UserStock
 */
export interface UserStock {
    /**
     * @generated from protobuf field: string username = 1;
     */
    username: string;
    /**
     * @generated from protobuf field: repeated string symbol = 2;
     */
    symbol: string[];
}
// @generated message type with reflection information, may provide speed optimized methods
class Empty$Type extends MessageType<Empty> {
    constructor() {
        super("stocks.Empty", []);
    }
    create(value?: PartialMessage<Empty>): Empty {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Empty>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Empty): Empty {
        return target ?? this.create();
    }
    internalBinaryWrite(message: Empty, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message stocks.Empty
 */
export const Empty = new Empty$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StocksList$Type extends MessageType<StocksList> {
    constructor() {
        super("stocks.StocksList", [
            { no: 1, name: "stocks", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Stock }
        ]);
    }
    create(value?: PartialMessage<StocksList>): StocksList {
        const message = { stocks: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<StocksList>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StocksList): StocksList {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated stocks.Stock stocks */ 1:
                    message.stocks.push(Stock.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: StocksList, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated stocks.Stock stocks = 1; */
        for (let i = 0; i < message.stocks.length; i++)
            Stock.internalBinaryWrite(message.stocks[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message stocks.StocksList
 */
export const StocksList = new StocksList$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Stock$Type extends MessageType<Stock> {
    constructor() {
        super("stocks.Stock", [
            { no: 1, name: "symbol", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "price", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 4, name: "time", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Stock>): Stock {
        const message = { symbol: "", name: "", price: 0, time: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Stock>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Stock): Stock {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string symbol */ 1:
                    message.symbol = reader.string();
                    break;
                case /* string name */ 2:
                    message.name = reader.string();
                    break;
                case /* float price */ 3:
                    message.price = reader.float();
                    break;
                case /* string time */ 4:
                    message.time = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Stock, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string symbol = 1; */
        if (message.symbol !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.symbol);
        /* string name = 2; */
        if (message.name !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.name);
        /* float price = 3; */
        if (message.price !== 0)
            writer.tag(3, WireType.Bit32).float(message.price);
        /* string time = 4; */
        if (message.time !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.time);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message stocks.Stock
 */
export const Stock = new Stock$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StockSymbol$Type extends MessageType<StockSymbol> {
    constructor() {
        super("stocks.StockSymbol", [
            { no: 1, name: "symbol", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<StockSymbol>): StockSymbol {
        const message = { symbol: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<StockSymbol>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StockSymbol): StockSymbol {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string symbol */ 1:
                    message.symbol = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: StockSymbol, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string symbol = 1; */
        if (message.symbol !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.symbol);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message stocks.StockSymbol
 */
export const StockSymbol = new StockSymbol$Type();
// @generated message type with reflection information, may provide speed optimized methods
class User$Type extends MessageType<User> {
    constructor() {
        super("stocks.User", [
            { no: 1, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<User>): User {
        const message = { username: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<User>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: User): User {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string username */ 1:
                    message.username = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: User, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string username = 1; */
        if (message.username !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.username);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message stocks.User
 */
export const User = new User$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UserStock$Type extends MessageType<UserStock> {
    constructor() {
        super("stocks.UserStock", [
            { no: 1, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "symbol", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<UserStock>): UserStock {
        const message = { username: "", symbol: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UserStock>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserStock): UserStock {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string username */ 1:
                    message.username = reader.string();
                    break;
                case /* repeated string symbol */ 2:
                    message.symbol.push(reader.string());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UserStock, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string username = 1; */
        if (message.username !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.username);
        /* repeated string symbol = 2; */
        for (let i = 0; i < message.symbol.length; i++)
            writer.tag(2, WireType.LengthDelimited).string(message.symbol[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message stocks.UserStock
 */
export const UserStock = new UserStock$Type();
/**
 * @generated ServiceType for protobuf service stocks.StocksService
 */
export const StocksService = new ServiceType("stocks.StocksService", [
    { name: "GetStocks", options: {}, I: User, O: StocksList },
    { name: "AddStock", options: {}, I: UserStock, O: StocksList },
    { name: "DeleteStock", options: {}, I: UserStock, O: StocksList }
], { "ts.server": ["GRPC1_SERVER"] });
