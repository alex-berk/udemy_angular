import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) ingredientName: ElementRef;
  @ViewChild('amountInput', {static: true}) ingredientAmount: ElementRef;

  addIngredient() {
    const name = this.ingredientName.nativeElement.value;
    const amount = this.ingredientAmount.nativeElement.value;
    this.shoppingLisetService.addIngredinet(new Ingredient(name, amount));
    this.shoppingLisetService.ingredientsUpdated.emit();
  }

  constructor(private shoppingLisetService: ShoppingListService) { }

  ngOnInit() {
  }

}
