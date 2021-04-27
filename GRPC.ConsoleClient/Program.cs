using Grpc.Net.Client;
using GRPC.Server.Protos;
using System;
using System.Threading.Tasks;

namespace GRPC.ConsoleClient
{
    class Program
    {
        static async Task Main(string[] args)
        {
            var channel = GrpcChannel.ForAddress("https://localhost:5001");

            await TestSayHello(channel);
            await TestGetDataFromDB(channel);

            Console.ReadKey();
        }

        private static async Task TestSayHello(GrpcChannel channel) 
        {
            var greeterClient = new Greeter.GreeterClient(channel);

            var greetResponse = await greeterClient.SayHelloAsync(
                  new HelloRequest
                  {
                      Name = ".NET 5 - grpcClient"
                  });
            Console.WriteLine("From Server: " + greetResponse.Message);
        }
        
        private static async Task TestGetDataFromDB(GrpcChannel channel) 
        {
            var bloggerClient = new Blogger.BloggerClient(channel);

            var blogResponse = await bloggerClient.GetBlogsAsync(
                  new BlogRequest
                  {
                      Count = 10
                  });
            Console.WriteLine("From Server: " + blogResponse);
        }
    }
}
