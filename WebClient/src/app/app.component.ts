import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogDto } from './generated/blogger_pb';
import { BloggerService } from './services/blogger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public blogs!: Observable<BlogDto.AsObject[]>;

  constructor(private _bloggerService: BloggerService) {
  }

  public ngOnInit() { }

  getBlogs(count: number): void {
    this.blogs = this._bloggerService.getBlogs(count);
  }
}
