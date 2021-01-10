import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model"

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)
  ];

  addIngredient(ingredientData: Ingredient){
    this.ingredients.push(ingredientData);
  }

  constructor() { }

  ngOnInit() {
  }

}
