import {Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    //NEITHER ARE NECESSARY B/C ROUTERLINK WAS USED TO LOAD DIFFERENT RECIPES
    // recipeSelected = new EventEmitter<Recipe>();
    // recipeSelected = new Subject<Recipe>();
    
    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'Shrimp Pasta Salad', 
    //         'Your Go to Healthy Meal - Served cold', 
    //         'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg', 
    //         [
    //             new Ingredient('Shrimp', 25),
    //             new Ingredient('Packs of Lo Mein', 1),
    //             new Ingredient('Zuchini', 2),
    //             new Ingredient('Cucumber', 1)
    //         ]),
    //     new Recipe(
    //         'Cheeseburger Deluxe', 
    //         'Mouthwatering Cheesburger - Want a bite?', 
    //         'https://upload.wikimedia.org/wikipedia/commons/d/dc/Lounge_Burger_Wiki.jpg', 
    //         [
    //             new Ingredient('Packs of Buns', 1),
    //             new Ingredient('Ground Beef', 1),
    //             new Ingredient('Pack of Cheese', 1),
    //             new Ingredient('Head of Lettuce', 1),
    //             new Ingredient('Onions', 1),
    //             new Ingredient('Tomatoes', 1),
    //             new Ingredient('Spicy Mayo',1)
    //         ])
    // ];

    private recipes: Recipe[] = [];

    constructor(private slService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());

    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}