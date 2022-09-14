import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AddbookComponent } from './Components/addbook/addbook.component';
import { SearchbooksComponent } from './Components/searchbooks/searchbooks.component';
import { AuthorComponent } from './Components/author/author.component';
import { GetmybooksComponent } from './Components/getmybooks/getmybooks.component';
import { DeletebookComponent } from './Components/deletebook/deletebook.component';
import { SignoutComponent } from './Components/signout/signout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddbookComponent,
    SearchbooksComponent,
    AuthorComponent,
    GetmybooksComponent,
    DeletebookComponent,
    SignoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
