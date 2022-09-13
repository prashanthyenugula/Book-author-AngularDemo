import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL_TO_ADD_BOOK ="http://localhost:8082/addBook";
const BASE_URL_TO_SEARCH_BOOK ="http://localhost:8082/books";
const BASE_URL_TO_DELETE_BOOK ="http://localhost:8082/deleteBook/";
const BASE_URL_TO_GET_ALLBOOKS ="http://localhost:8082/getAllBooks";


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  getBooks(){
    return this.http.get(BASE_URL_TO_SEARCH_BOOK)
  }

  createBook(book:{
    title:string;
    category:string;
    image:string;
    price:number ;
    publisher:string;
    active: boolean;
  })
  {
    return this.http.post(BASE_URL_TO_ADD_BOOK,book)
  }

  deleteBook(book : any) {
    return this.http.delete(BASE_URL_TO_DELETE_BOOK,book.id)
  }

  constructor(public http: HttpClient) { }
}
