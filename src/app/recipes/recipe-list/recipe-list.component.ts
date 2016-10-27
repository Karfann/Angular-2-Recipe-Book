import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy description', 
                      'http://thumbs.ebaystatic.com/images/m/mfXELL6zPWJE4OC0agiXMZw/s-l225.jpg');

  constructor() { }

  ngOnInit() {
  }

}