import { Injectable } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../generated/weather_forecast_pb';
import { WeatherForecasts } from '../generated/weather_forecast_pb_service';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  constructor() { }

  getWeatherStream(): Observable<WeatherData.AsObject> {
    return new Observable(subscriber => {
      grpc.invoke(WeatherForecasts.GetWeatherStream, {
        request: new Empty(),
        host: environment.apiHost,
        onMessage: (message: WeatherData) => {
          subscriber.next(message.toObject());
        },
        onEnd: (code: grpc.Code, message: string | undefined, trailers: grpc.Metadata) => {
          if (code === grpc.Code.OK) {
            subscriber.complete();
          }
          subscriber.error({ code, message, trailers });
        }
      });
    });

  }
}
