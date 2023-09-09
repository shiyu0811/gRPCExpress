// @generated by protobuf-ts 2.9.1
// @generated from protobuf file "stocks.proto" (package "stocks", syntax proto3)
// tslint:disable
import { StocksService } from "./stocks";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { UserStock } from "./stocks";
import type { StocksList } from "./stocks";
import type { User } from "./stocks";
import * as grpc from "@grpc/grpc-js";
/**
 * @generated from protobuf service stocks.StocksService
 */
export interface IStocksServiceClient {
    /**
     * @generated from protobuf rpc: GetStocks(stocks.User) returns (stocks.StocksList);
     */
    getStocks(input: User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: StocksList) => void): grpc.ClientUnaryCall;
    getStocks(input: User, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: StocksList) => void): grpc.ClientUnaryCall;
    getStocks(input: User, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: StocksList) => void): grpc.ClientUnaryCall;
    getStocks(input: User, callback: (err: grpc.ServiceError | null, value?: StocksList) => void): grpc.ClientUnaryCall;
    /**
     * @generated from protobuf rpc: AddStock(stocks.UserStock) returns (stocks.StocksList);
     */
    addStock(input: UserStock, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: StocksList) => void): grpc.ClientUnaryCall;
    addStock(input: UserStock, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: StocksList) => void): grpc.ClientUnaryCall;
    addStock(input: UserStock, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: StocksList) => void): grpc.ClientUnaryCall;
    addStock(input: UserStock, callback: (err: grpc.ServiceError | null, value?: StocksList) => void): grpc.ClientUnaryCall;
    /**
     * @generated from protobuf rpc: DeleteStock(stocks.UserStock) returns (stocks.StocksList);
     */
    deleteStock(input: UserStock, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: StocksList) => void): grpc.ClientUnaryCall;
    deleteStock(input: UserStock, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: StocksList) => void): grpc.ClientUnaryCall;
    deleteStock(input: UserStock, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: StocksList) => void): grpc.ClientUnaryCall;
    deleteStock(input: UserStock, callback: (err: grpc.ServiceError | null, value?: StocksList) => void): grpc.ClientUnaryCall;
}
/**
 * @generated from protobuf service stocks.StocksService
 */
export class StocksServiceClient extends grpc.Client implements IStocksServiceClient {
    private readonly _binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions>;
    constructor(address: string, credentials: grpc.ChannelCredentials, options: grpc.ClientOptions = {}, binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions> = {}) {
        super(address, credentials, options);
        this._binaryOptions = binaryOptions;
    }
    /**
     * @generated from protobuf rpc: GetStocks(stocks.User) returns (stocks.StocksList);
     */
    getStocks(input: User, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: StocksList) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: StocksList) => void), callback?: ((err: grpc.ServiceError | null, value?: StocksList) => void)): grpc.ClientUnaryCall {
        const method = StocksService.methods[0];
        return this.makeUnaryRequest<User, StocksList>(`/${StocksService.typeName}/${method.name}`, (value: User): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): StocksList => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
    /**
     * @generated from protobuf rpc: AddStock(stocks.UserStock) returns (stocks.StocksList);
     */
    addStock(input: UserStock, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: StocksList) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: StocksList) => void), callback?: ((err: grpc.ServiceError | null, value?: StocksList) => void)): grpc.ClientUnaryCall {
        const method = StocksService.methods[1];
        return this.makeUnaryRequest<UserStock, StocksList>(`/${StocksService.typeName}/${method.name}`, (value: UserStock): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): StocksList => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
    /**
     * @generated from protobuf rpc: DeleteStock(stocks.UserStock) returns (stocks.StocksList);
     */
    deleteStock(input: UserStock, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: StocksList) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: StocksList) => void), callback?: ((err: grpc.ServiceError | null, value?: StocksList) => void)): grpc.ClientUnaryCall {
        const method = StocksService.methods[2];
        return this.makeUnaryRequest<UserStock, StocksList>(`/${StocksService.typeName}/${method.name}`, (value: UserStock): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): StocksList => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
}
