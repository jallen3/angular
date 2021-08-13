import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // @Input() recipe: Recipe; --> Was intially being used to receive values throughout project
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { 
    }

  ngOnInit(): void {
    //const id = this.route.snapshot.params['id']; works, but Only for the 1st time the detail component is loaded
    //INSTEAD USE:
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id']; //NOTE: The '+' sign casts to a number because the id being grabbed is a string
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );

  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    //SIMPLER CODE
    this.router.navigate(['edit'], {relativeTo: this.route}); 
    //THIS IS AN ALTERNATIVE TO ABOVE (it's more complex):
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
