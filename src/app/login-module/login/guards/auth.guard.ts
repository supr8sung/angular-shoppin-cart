import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth.service";

@Injectable({
    providedIn: "root"
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }
    canActivate() {
        if (this.authService.isUserLoggedIn()) {
            return true;
        }
        else {
            this.router.navigateByUrl("/login")
            return false;
        }
    }

}