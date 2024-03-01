import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerachPageComponent } from './components/serach-page/serach-page.component';
import { RecipesListPageComponent } from './components/recipes-list-page/recipes-list-page.component';
import { RecipesDetailsPageComponent } from './components/recipes-details-page/recipes-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: SerachPageComponent
  },
  {
    path: 'list',
    component: RecipesListPageComponent
  },
  {
    path: 'details/:id',
    component: RecipesDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
