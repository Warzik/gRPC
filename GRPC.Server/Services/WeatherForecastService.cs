using Google.Protobuf.WellKnownTypes;
using Grpc.Core;
using GRPC.Server.Protos;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;
using static GRPC.Server.Protos.WeatherForecasts;

namespace GRPC.Server.Services
{
    public class WeatherForecastService : WeatherForecastsBase
    {
        private readonly ILogger<WeatherForecastService> _logger;

        private static readonly string[] Summaries =
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        public WeatherForecastService(ILogger<WeatherForecastService> logger) => _logger = logger;

        public override async Task GetWeatherStream(Empty _, IServerStreamWriter<WeatherData> responseStream, ServerCallContext context)
        {
            var rng = new Random();
            var now = DateTime.UtcNow;

            var i = 0;
            while (!context.CancellationToken.IsCancellationRequested && i < 20)
            {
                await Task.Delay(500); // Gotta look busy

                var forecast = new WeatherData
                {
                    DateTimeStamp = Timestamp.FromDateTime(now.AddDays(i++)),
                    TemperatureC = rng.Next(-20, 55),
                    Summary = Summaries[rng.Next(Summaries.Length)]
                };

                _logger.LogInformation("Sending WeatherData response");

                await responseStream.WriteAsync(forecast);
            }
        }
    }
}