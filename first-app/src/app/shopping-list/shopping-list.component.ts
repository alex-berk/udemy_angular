import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingredientsSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientsSub = this.shoppingListService.ingredientsUpdated.subscribe(updatedIngredients => {
      this.ingredients = updatedIngredients;
    });
  }

  ngOnDestroy() {
    this.ingredientsSub.unsubscribe();
  }

}
