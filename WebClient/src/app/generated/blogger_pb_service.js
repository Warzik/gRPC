// package: gRPC.server.protos
// file: blogger.proto

var blogger_pb = require("./blogger_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Blogger = (function () {
  function Blogger() {}
  Blogger.serviceName = "gRPC.server.protos.Blogger";
  return Blogger;
}());

Blogger.GetBlogs = {
  methodName: "GetBlogs",
  service: Blogger,
  requestStream: false,
  responseStream: false,
  requestType: blogger_pb.BlogRequest,
  responseType: blogger_pb.BlogResponse
};

exports.Blogger = Blogger;

function BloggerClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BloggerClient.prototype.getBlogs = function getBlogs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Blogger.GetBlogs, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.BloggerClient = BloggerClient;

