import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './http.component';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getPost(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }

  getPosts(id: number): Observable<Post> {
    return this.http.get<Post>(
      'https://jsonplaceholder.typicode.com/posts/' + id
    );
  }

  getPostByUser() {}

  addPost() {}

  updatePost() {}

  deletePost() {}

  changePost() {}
}
