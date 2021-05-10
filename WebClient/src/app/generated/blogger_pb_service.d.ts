// package: gRPC.server.protos
// file: blogger.proto

import * as blogger_pb from "./blogger_pb";
import {grpc} from "@improbable-eng/grpc-web";

type BloggerGetBlogs = {
  readonly methodName: string;
  readonly service: typeof Blogger;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof blogger_pb.BlogRequest;
  readonly responseType: typeof blogger_pb.BlogResponse;
};

export class Blogger {
  static readonly serviceName: string;
  static readonly GetBlogs: BloggerGetBlogs;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class BloggerClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getBlogs(
    requestMessage: blogger_pb.BlogRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: blogger_pb.BlogResponse|null) => void
  ): UnaryResponse;
  getBlogs(
    requestMessage: blogger_pb.BlogRequest,
    callback: (error: ServiceError|null, responseMessage: blogger_pb.BlogResponse|null) => void
  ): UnaryResponse;
}

