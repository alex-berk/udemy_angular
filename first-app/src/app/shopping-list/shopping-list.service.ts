import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsUpdated = new EventEmitter<void>();
  private ingredients = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredinet(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
