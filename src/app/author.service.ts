import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL_TO_AUTHOR_SIGNIN ="http://localhost:8082/author/addAuthor";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  getAuthor(){
    return this.http.get(BASE_URL_TO_AUTHOR_SIGNIN)
  }

  constructor(public http: HttpClient) { }
}
