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
    'https://www.sweetrecipeas.com/wp-content/uploads/2020/03/Chocolate-Sprinkle-Yeast-Donuts-03.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
