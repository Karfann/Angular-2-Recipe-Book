import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe( 'Hot Dog', 'Very tasty',
                'http://www.smithfieldfoods.com/images/home/packaged-brands/gwaltney-food.jpg', 
                [
                  new Ingredient('French Fries', 2),
                  new Ingredient('Pork Meat', 1)
                ] ),
    new Recipe( 'Pasta', 'Italian Food',
                'http://www.smithfieldfoods.com/images/home/packaged-brands/armour-food.jpg', [] )
  ];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }
}
