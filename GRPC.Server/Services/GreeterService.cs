using AutoMapper;
using Grpc.Core;
using GRPC.Server.Protos;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using static GRPC.Server.Protos.Greeter;

namespace GRPC.Server
{
    public class GreeterService : GreeterBase
    {
        private readonly ILogger<GreeterService> _logger;
        private readonly IMapper _mapper;

        public GreeterService(ILogger<GreeterService> logger, IMapper mapper)
        {
            _logger = logger;
            _mapper = mapper;
        }

        public override Task<HelloReply> SayHello(HelloRequest request, ServerCallContext context)
        {
            return Task.FromResult(new HelloReply
            {
                Message = "Hello " + request.Name
            });
        }
    }
}