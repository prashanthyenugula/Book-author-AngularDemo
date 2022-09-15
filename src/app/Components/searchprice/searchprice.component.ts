import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';
import Book from 'src/app/entity/Book';

@Component({
  selector: 'app-searchprice',
  templateUrl: './searchprice.component.html',
  styleUrls: ['./searchprice.component.css']
})
export class SearchpriceComponent implements OnInit {

  book: Book = new Book();
  books:Book[]=[];

  searchPrice(book : any){
    const observable = this.booksService.getBookByPrice(book)
    observable.subscribe(
      (response : any) => {
        console.log(response);
      },
      function(error){
        console.log(error);
        alert("something went wrong, please try again!")
      }
    )
  }

  constructor(public booksService: BooksService) { }

  ngOnInit(): void {
    const promise = this.booksService.getBookByPrice(this.book);
    promise.subscribe((response) => {
      console.log(response);
      this.books = response as Book[];
    })
  }

}
