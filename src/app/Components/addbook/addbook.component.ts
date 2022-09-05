import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';
import Book from 'src/app/entity/Book';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  title = "Fill the Details to Search Book"

  book: Book = new Book();
  books:Book[]=[];

  save(){
    const observable = this.booksService.addBook(this.book)
    observable.subscribe(
      (response : any) => {
        console.log(response);
        alert("Books are added successfully!")
      },
      function(error){
        console.log(error);
        alert("something went wrong, please try again!")
      }
    )
  }


  constructor(public booksService: BooksService) { }

  ngOnInit(): void {
  }

}
