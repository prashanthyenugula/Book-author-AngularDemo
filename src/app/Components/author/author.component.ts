import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';
import Book from 'src/app/entity/Book';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  book: Book = new Book();
  books:Book[]=[];

  isDisabled: boolean = false;

  constructor(public booksService: BooksService) { }

  ngOnInit(): void {
  }

}
