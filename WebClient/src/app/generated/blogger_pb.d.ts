// package: gRPC.server.protos
// file: blogger.proto

import * as jspb from "google-protobuf";

export class BlogRequest extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BlogRequest): BlogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlogRequest;
  static deserializeBinaryFromReader(message: BlogRequest, reader: jspb.BinaryReader): BlogRequest;
}

export namespace BlogRequest {
  export type AsObject = {
    count: number,
  }
}

export class BlogResponse extends jspb.Message {
  clearBlogsList(): void;
  getBlogsList(): Array<BlogDto>;
  setBlogsList(value: Array<BlogDto>): void;
  addBlogs(value?: BlogDto, index?: number): BlogDto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BlogResponse): BlogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlogResponse;
  static deserializeBinaryFromReader(message: BlogResponse, reader: jspb.BinaryReader): BlogResponse;
}

export namespace BlogResponse {
  export type AsObject = {
    blogsList: Array<BlogDto.AsObject>,
  }
}

export class BlogDto extends jspb.Message {
  getBlogId(): number;
  setBlogId(value: number): void;

  getUrl(): string;
  setUrl(value: string): void;

  clearPostsList(): void;
  getPostsList(): Array<PostDto>;
  setPostsList(value: Array<PostDto>): void;
  addPosts(value?: PostDto, index?: number): PostDto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlogDto.AsObject;
  static toObject(includeInstance: boolean, msg: BlogDto): BlogDto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlogDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlogDto;
  static deserializeBinaryFromReader(message: BlogDto, reader: jspb.BinaryReader): BlogDto;
}

export namespace BlogDto {
  export type AsObject = {
    blogId: number,
    url: string,
    postsList: Array<PostDto.AsObject>,
  }
}

export class PostDto extends jspb.Message {
  getPostId(): number;
  setPostId(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getBlogid(): number;
  setBlogid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostDto.AsObject;
  static toObject(includeInstance: boolean, msg: PostDto): PostDto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostDto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostDto;
  static deserializeBinaryFromReader(message: PostDto, reader: jspb.BinaryReader): PostDto;
}

export namespace PostDto {
  export type AsObject = {
    postId: number,
    title: string,
    content: string,
    blogid: number,
  }
}

