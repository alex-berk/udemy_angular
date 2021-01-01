import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('New Recipe', 'Simple recipe of a simple dish',
    'https://www.sweetrecipeas.com/wp-content/uploads/2020/03/Chocolate-Sprinkle-Yeast-Donuts-03.jpeg'),
    new Recipe('New Recipe 2', 'Another simple recipe of a simple dish',
    'https://www.drinksupermarket.com/media/catalog/product/cache/1/image/600x/9df78eab33525d08d6e5fb8d27136e95/c/o/coca-cola-original-330ml.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
