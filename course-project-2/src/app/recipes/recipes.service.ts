import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: "schnitzel",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/1024px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      ingredients: ['French Fries', 'Pork', 'Salad']
    },
    {
      id: 'r2',
      title: "Spaghetti",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Spaghetti_bolognese_%28hozinja%29.jpg',
      ingredients: ['Noodles', 'Beef', 'Tomatoes']
    }
  ]
  constructor() { }

  getRecipes() {
    return [...this.recipes];
  }

  getRecipe(id: string) {
    return this.recipes.find(recipe => recipe.id == id);
  }

  deleteRecipe(id:string) {
    this.recipes = this.recipes.filter(recipe => { return recipe.id !== id;})
  }
}
