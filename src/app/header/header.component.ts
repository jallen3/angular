import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
    selector: 'app-header', //This is the tag name that will be used when referencing in other places; DONT FORGET to register it as a component in the app.module.ts file
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit, OnDestroy {
    
    isAuthenticated = false;
    private userSub: Subscription;

    constructor(private dataStorageService: DataStorageService, private authService: AuthService) {}

    ngOnInit() {
        this.userSub = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user; //is the same as: !user ? false : true; If they're not a user set to false, else if they are a user set to true
            //To se the logic:
            console.log(user);
            console.log('!!user: ' + !!user);
        });
    }

    //Making Http Requests
    onSaveData() {
        this.dataStorageService.storeRecipes();
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe();
    }

    onLogout() {
        this.authService.logout();
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
    //NAVIGATE BETWEEN PAGES W/ CLICK LISTENERS
    // @Output() featureSelected = new EventEmitter<string>();

    // OnSelect(feature: string){
    //     this.featureSelected.emit(feature);
    // }
}