import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = 'https://api.spoonacular.com/recipes'
  key: any = '661555ac9e86413fa6dcca528053382d'

  constructor(private http: HttpClient) {}

  getListOfRecipes(serachText: string) {
    const data = {
      apiKey: '661555ac9e86413fa6dcca528053382d',
      query: serachText,
      number: 2
    }
    return this.http.get(`${this.baseUrl}/complexSearch`, { params: data });
  }}
