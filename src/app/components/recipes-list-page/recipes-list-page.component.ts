import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-recipes-list-page',
  templateUrl: './recipes-list-page.component.html'
})
export class RecipesListPageComponent implements OnInit {
  recipes: any[] = [];

  searchText!: string
  constructor(
    private route: ActivatedRoute,
    private recipeService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const query = params['query'];
      this.searchText = query
      if (query) {
        this.recipeService.getListOfRecipes(query).subscribe((data: any) => {
          this.recipes = data.results;
        });
      }
    });
  }

  showDetails(id: number): void {
    this.router.navigate([`details/${id}`])
  }
}
