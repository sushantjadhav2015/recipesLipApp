import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-recipes-details-page',
  templateUrl: './recipes-details-page.component.html'
})
export class RecipesDetailsPageComponent implements OnInit {
  recipeId!: number;
  ingreadiants!: any[];
  steps!: string[];

  details: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.recipeId = this.activeRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.apiService.getDetailsOfRecipes(this.recipeId).subscribe({
      next: (res: any) => {
        this.details = res;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
