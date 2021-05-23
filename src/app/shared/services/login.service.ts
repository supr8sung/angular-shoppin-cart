import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment"
@Injectable({
    providedIn: 'root'
})
export class LoginService {


    private BASE_URL = environment.shopping_cart_base_url;

    constructor(private httpClient: HttpClient) { }

    doLogin(value: any) {
        console.log(`value ${value}`)
        return this.httpClient.post<any>(this.BASE_URL + "/authenticate", value)
    }

}