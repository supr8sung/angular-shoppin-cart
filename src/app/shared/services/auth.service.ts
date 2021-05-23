import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    private readonly JWT_TOKEN = "JWT_TOKEN";

    isUserLoggedIn() {

        var token = this.getJwtToken();

        return this.getJwtToken()? true: false;
        // return token ? !this.isTokenExpired(token) : false;
    }

    storeJwtToken(token: string) {
        localStorage.setItem(this.JWT_TOKEN,token);
    }

    getJwtToken() {
        return localStorage.getItem(this.JWT_TOKEN);
    }
    private isTokenExpired(token: string) {
        const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
        return Math.floor((new Date().getTime() / 1000)) >= expiry;

    }

}