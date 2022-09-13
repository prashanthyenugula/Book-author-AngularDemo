import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';
import Book from 'src/app/entity/Book';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})
export class DeletebookComponent implements OnInit {

  book: Book = new Book();
  books:Book[]=[];

  deleteRow(book: any, index: number) {
    const observable = this.booksService.deleteBook(book)
    observable.subscribe((response:any) =>{
      console.log(response);
      this.books.splice(index,1)

    })
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
