import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  //@Output() recipeSelected = new EventEmitter<void>();

  // constructor(private recipeService: RecipeService) { } --> USED IN PROCESS OF SELECTING RECIPE WITH CLICK LISTENER

  ngOnInit(): void {
  }

  //USED TO SELECT RECIPE W/ CLICK LISTENERS
  // OnSelected() { 
  //   //this.recipeSelected.emit();
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
