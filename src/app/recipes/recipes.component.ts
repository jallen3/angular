import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
  // providers: [RecipeService] --> All the components here share the same instance, but if you navigate away from the recipes page to the shopping list page, the recipes component is destroyed and so are its instances
})

export class RecipesComponent implements OnInit {
 
  //INJECTION OF RECIPE SERVICE NO LONGER NEEDED B/C ROUTING (AND SUBJECTS) IS NOW BEING USED
  // selectedRecipe: Recipe;
  // constructor(private recipeService: RecipeService) { }

  constructor() { }

  ngOnInit(): void {
    //WORKS WITH THE EVENT EMITTER TO LOAD DIFFERENT RECIPES
    // this.recipeService.recipeSelected
    // .subscribe(
    //   (recipe: Recipe) => {
    //     this.selectedRecipe = recipe;
    //   }
    // );
  }

}
