import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpGETComponent implements OnInit {
  constructor(private HttpService: HttpService) {}

  getPost() {
    this.HttpService.getPost().subscribe((example) => console.log(example));
  }

  getPosts() {}

  getPostByUser() {}

  addPost() {}

  updatePost() {}

  deletePost() {}

  changePost() {}

  ngOnInit(): void {}
}

export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}
