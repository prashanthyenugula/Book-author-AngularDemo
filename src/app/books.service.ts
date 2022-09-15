import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const BASE_URL_TO_ADD_BOOK ="http://localhost:8082/addBook";
const BASE_URL_TO_SEARCH_BOOK ="http://localhost:8082/books";
const BASE_URL_TO_DELETE_BOOK ="http://localhost:8082/deleteBook/";
const BASE_URL_TO_UPDATE_BOOK ="http://localhost:8082/update/";
const BASE_URL_TO_GET_ALLBOOKS ="http://localhost:8082/getAllBooks";
const BASE_URL_TO_GET_BOOK_BY_TITLE ="http://localhost:8082/getBookByTitle/";
const BASE_URL_TO_GET_BOOK_BY_CATEGORY ="http://localhost:8082/getBookByCategory/";
const BASE_URL_TO_GET_BOOK_BY_PRICE ="http://localhost:8082/getBookByPrice/";


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  getBooks(){
    return this.http.get(BASE_URL_TO_SEARCH_BOOK)
  }

  getBookByTitle(book : any){
    return this.http.get(BASE_URL_TO_GET_BOOK_BY_TITLE+book.title)
  }

  getBookByCategory(book : any){
    return this.http.get(BASE_URL_TO_GET_BOOK_BY_CATEGORY+book.category)
  }

  getBookByPrice(book : any){
    return this.http.get(BASE_URL_TO_GET_BOOK_BY_PRICE+book.price)
  }

  createBook(book:{
    title:string;
    category:string;
    image:string;
    price:string;
    publisher:string;
    active: boolean;
  })
  {
    return this.http.post(BASE_URL_TO_ADD_BOOK,book)
  }

  deleteBook(book : any) {
    return this.http.delete(BASE_URL_TO_DELETE_BOOK+book.id)
  }

  updateBook(book: any ,id: number) {
    return this.http.put(BASE_URL_TO_UPDATE_BOOK + id, book)
  }

  constructor(public http: HttpClient) { }
}
