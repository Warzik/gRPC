import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogDto } from './generated/blogger_pb';
import { BloggerService } from './services/blogger.service';
import { WeatherForecastService } from './services/weather-forecast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public blogs!: Observable<BlogDto.AsObject[]>;

  constructor(private _bloggerService: BloggerService, private _weatherForecastService: WeatherForecastService) {
    _weatherForecastService.getWeatherStream().subscribe(console.log);
  }

  public ngOnInit() { }

  getBlogs(count: number): void {
    this.blogs = this._bloggerService.getBlogs(count);
  }
}
