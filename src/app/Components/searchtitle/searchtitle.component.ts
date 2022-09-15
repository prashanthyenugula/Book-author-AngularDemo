import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';
import Book from 'src/app/entity/Book';

@Component({
  selector: 'app-searchtitle',
  templateUrl: './searchtitle.component.html',
  styleUrls: ['./searchtitle.component.css']
})
export class SearchtitleComponent implements OnInit {

  book: Book = new Book();
  books:Book[]=[];

  searchTitle(book : any){
    const observable = this.booksService.getBookByTitle(book)
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
    const promise = this.booksService.getBookByTitle(this.book);
    promise.subscribe((response) => {
      console.log(response);
      this.books = response as Book[];
    })
  
  }

}
