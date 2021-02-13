import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsUpdated = new Subject<Ingredient[]>();
  private ingredients = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredinet(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsUpdated.next(this.getIngredients());
  }

  addIngredientsBulk(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsUpdated.next(this.getIngredients());
  }
}
