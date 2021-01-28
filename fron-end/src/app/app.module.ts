import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoosListComponent } from './books/boos-list/boos-list.component';
import { BoosDetailsComponent } from './books/boos-details/boos-details.component';
import { CreateBoosComponent } from './books/create-boos/create-boos.component';
import { UpdateBoosComponent } from './books/update-boos/update-boos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeleteBooksComponent } from './books/delete-books/delete-books.component';

@NgModule({
  declarations: [
    AppComponent,
    BoosListComponent,
    BoosDetailsComponent,
    CreateBoosComponent,
    UpdateBoosComponent,
    DeleteBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
