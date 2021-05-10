// package: gRPC.server.protos
// file: weather_forecast.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class WeatherData extends jspb.Message {
  hasDateTimeStamp(): boolean;
  clearDateTimeStamp(): void;
  getDateTimeStamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateTimeStamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTemperatureC(): number;
  setTemperatureC(value: number): void;

  getTemperatureF(): number;
  setTemperatureF(value: number): void;

  getSummary(): string;
  setSummary(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeatherData.AsObject;
  static toObject(includeInstance: boolean, msg: WeatherData): WeatherData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WeatherData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeatherData;
  static deserializeBinaryFromReader(message: WeatherData, reader: jspb.BinaryReader): WeatherData;
}

export namespace WeatherData {
  export type AsObject = {
    dateTimeStamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    temperatureC: number,
    temperatureF: number,
    summary: string,
  }
}

