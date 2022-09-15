import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';
import Book from 'src/app/entity/Book';

@Component({
  selector: 'app-searchcategory',
  templateUrl: './searchcategory.component.html',
  styleUrls: ['./searchcategory.component.css']
})
export class SearchcategoryComponent implements OnInit {

  book: Book = new Book();
  books:Book[]=[];

  searchCategory(book : any){
    const observable = this.booksService.getBookByCategory(book)
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
    const promise = this.booksService.getBookByCategory(this.book);
    promise.subscribe((response) => {
      console.log(response);
      this.books = response as Book[];
    })
  }

}
