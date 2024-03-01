import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerachPageComponent } from './components/serach-page/serach-page.component';
import { RecipesListPageComponent } from './components/recipes-list-page/recipes-list-page.component';
import { RecipesDetailsPageComponent } from './components/recipes-details-page/recipes-details-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SerachPageComponent,
    RecipesListPageComponent,
    RecipesDetailsPageComponent
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
