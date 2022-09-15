import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './Components/addbook/addbook.component';
import { AuthorComponent } from './Components/author/author.component';
import { DeletebookComponent } from './Components/deletebook/deletebook.component';
import { EditbookComponent } from './Components/editbook/editbook.component';
import { GetmybooksComponent } from './Components/getmybooks/getmybooks.component';
import { SearchbooksComponent } from './Components/searchbooks/searchbooks.component';
import { SearchcategoryComponent } from './Components/searchcategory/searchcategory.component';
import { SearchpriceComponent } from './Components/searchprice/searchprice.component';
import { SearchtitleComponent } from './Components/searchtitle/searchtitle.component';
import { SignoutComponent } from './Components/signout/signout.component';

const routes: Routes = [{path:'addbook',
component:AddbookComponent},
{path:'books',component:SearchbooksComponent},
{path:'author',component:AuthorComponent},
{path:'getAllBooks',component:GetmybooksComponent},
{path:'editBook',component:EditbookComponent},
{path:'deleteBook',component:DeletebookComponent},
{path:'signout',component:SignoutComponent},
{path:'searchTitle',component:SearchtitleComponent},
{path:'searchPrice',component:SearchpriceComponent},
{path:'searchCategory',component:SearchcategoryComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
