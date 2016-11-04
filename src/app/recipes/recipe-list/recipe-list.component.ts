import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe( 'Hot Dog', 'Very tasty',
                'http://www.smithfieldfoods.com/images/home/packaged-brands/gwaltney-food.jpg', [] ),
    new Recipe( 'Pasta', 'Italian Food',
                'http://www.smithfieldfoods.com/images/home/packaged-brands/armour-food.jpg', [] )
  ];
  
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}