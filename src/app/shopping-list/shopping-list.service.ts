// import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

    // ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>(); //better use than eventEmitter
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes', 10)
      ];
    
    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    //Add single ingredient to the shopping list array of ingredients
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    //Add Ingredients from recipe to the ingredient/shopping list
    addIngredients(ingredients: Ingredient[]) {
        //SOLUTION 1: not as goood as soln 2 b/c it emits alot of events
        // for(let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }

        //SOLUTION 2: the '...' operator takes the array of ingredients & puts it in a list, 
        //then you emit the entire list at the end
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());

    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}