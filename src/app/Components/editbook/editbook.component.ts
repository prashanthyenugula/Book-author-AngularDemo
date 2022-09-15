import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';
import Book from 'src/app/entity/Book';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})

export class EditbookComponent implements OnInit {

  book: Book = new Book();
  books:Book[]=[];
  id:number = 0;


  update(book: any){
    console.log(book);
    const observable = this.booksService.updateBook(this.book, this.id) 
    observable.subscribe((response:any) => {
      console.log(response);
    },
      function(error) {
        console.log(error);
        alert("something went wrong please check!")
      }
    )
  }

  updatebook(book: { title: string; category: string; image: string; price: string; publisher: string; active: boolean; },j: any) {
    // this.id = book.title;
    this.book.title = book.title
    this.book.category = book.category
    this.book.image = book.image
    this.book.price = book.price
    this.book.publisher = book.publisher
    this.book.active = book.active
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
