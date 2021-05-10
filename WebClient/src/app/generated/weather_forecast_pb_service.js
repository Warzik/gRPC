// package: gRPC.server.protos
// file: weather_forecast.proto

var weather_forecast_pb = require("./weather_forecast_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var WeatherForecasts = (function () {
  function WeatherForecasts() {}
  WeatherForecasts.serviceName = "gRPC.server.protos.WeatherForecasts";
  return WeatherForecasts;
}());

WeatherForecasts.GetWeatherStream = {
  methodName: "GetWeatherStream",
  service: WeatherForecasts,
  requestStream: false,
  responseStream: true,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: weather_forecast_pb.WeatherData
};

exports.WeatherForecasts = WeatherForecasts;

function WeatherForecastsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

WeatherForecastsClient.prototype.getWeatherStream = function getWeatherStream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(WeatherForecasts.GetWeatherStream, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.WeatherForecastsClient = WeatherForecastsClient;

