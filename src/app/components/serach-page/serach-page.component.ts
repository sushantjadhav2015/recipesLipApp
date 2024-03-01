import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serach-page',
  templateUrl: './serach-page.component.html',
  styleUrls: ['./serach-page.component.css']
})
export class SerachPageComponent implements OnInit {

  searchQuery!: string;

  constructor(private router: Router) {}

  searchRecipes() {
    if (this.searchQuery) {
      this.router.navigate(['/list'], { queryParams: { query: this.searchQuery } });
    }
  }
  ngOnInit(): void {
  }

}
