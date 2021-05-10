import { Injectable } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlogDto, BlogRequest, BlogResponse } from '../generated/blogger_pb';
import { Blogger } from '../generated/blogger_pb_service';

@Injectable({
  providedIn: 'root'
})
export class BloggerService {

  constructor() { }

  getBlogs(count: number): Observable<BlogDto.AsObject[]> {
    return new Observable(subscriber => {
      const getBlogsRequest = new BlogRequest();
      getBlogsRequest.setCount(count);

      grpc.invoke(Blogger.GetBlogs, {
        request: getBlogsRequest,
        host: environment.apiHost,
        onMessage: (message: BlogResponse) => {
          subscriber.next(message.toObject().blogsList);
          subscriber.complete();
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
