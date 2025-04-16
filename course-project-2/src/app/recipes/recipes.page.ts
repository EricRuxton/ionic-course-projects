import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonAvatar, IonImg, IonLabel, IonButton } from '@ionic/angular/standalone';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  standalone: true,
  imports: [IonLabel, IonImg, IonAvatar, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class RecipesPage implements OnInit {

  recipes = signal<Recipe[]>([]);

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes.set(this.recipesService.getRecipes());
  }

}
