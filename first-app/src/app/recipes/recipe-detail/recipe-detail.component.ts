import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../../recipes/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private spList: ShoppingListService,
              private recipes: RecipeService,
              private route: ActivatedRoute) { }

  toShoppingList() {
    this.spList.addIngredientsBulk(this.recipe.ingredients);
  }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.recipe = this.recipes.getRecipeById(+routeParams.id);
    });
  }

}
