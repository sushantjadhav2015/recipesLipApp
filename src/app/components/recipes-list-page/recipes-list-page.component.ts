import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-recipes-list-page',
  templateUrl: './recipes-list-page.component.html',
  styleUrls: ['./recipes-list-page.component.css'],
})
export class RecipesListPageComponent implements OnInit {
  recipes: any[] = [
    {
      id: 654534,
      title: 'Paneer Makhani',
      image: 'https://spoonacular.com/recipeImages/654534-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 654532,
      title: 'Paneer jalfrezi',
      image: 'https://spoonacular.com/recipeImages/654532-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 654523,
      title: 'Paneer & Fig Pizza',
      image: 'https://spoonacular.com/recipeImages/654523-312x231.jpg',
      imageType: 'jpg',
    }
  ];

  searchText!: string
  constructor(
    private route: ActivatedRoute,
    private recipeService: ApiService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const query = params['query'];
      this.searchText = query
      if (query) {
        console.log('data coming in list page', query);

        // this.recipeService.getListOfRecipes(query).subscribe((data: any) => {
        //   this.recipes = data.results;
        // });
      }
    });
  }

  showDetails(id: number): void {
    alert(id)
  }
}
