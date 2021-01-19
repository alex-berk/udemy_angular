import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input("recipe") recipeData: Recipe;

  onRecipeClicked(){
    this.recipeService.recipeSelected.emit(this.recipeData);
  }

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

}
