import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';
import Book from 'src/app/entity/Book';

@Component({
  selector: 'app-searchbooks',
  templateUrl: './searchbooks.component.html',
  styleUrls: ['./searchbooks.component.css']
})
export class SearchbooksComponent implements OnInit {

  title = "Fill the Details to Search Book"

  book: Book = new Book();
  books:Book[]=[];

  search(){
    const observable = this.booksService.getBooks()
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
    const promise = this.booksService.getBooks();
    promise.subscribe((response) => {
      console.log(response);
      this.books = response as Book[];
    })
  }

}
