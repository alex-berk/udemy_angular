import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) ingredientName: ElementRef;
  @ViewChild('amountInput', {static: true}) ingredientAmount: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  

  addIngredient(){
    const name = this.ingredientName.nativeElement.value
    const amount = this.ingredientAmount.nativeElement.value
    this.ingredientAdded.emit(new Ingredient(name, amount))
  }

  constructor() { }

  ngOnInit() {
  }

}
