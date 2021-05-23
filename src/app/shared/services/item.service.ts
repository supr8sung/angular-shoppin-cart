import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment"
import { AuthService } from './auth.service';
@Injectable({
    providedIn: 'root'
})
export class ItemService {


    private BASE_URL = environment.shopping_cart_base_url;

    constructor(private httpClient: HttpClient, private authService: AuthService) { }


    allItems() {
        return this.httpClient.get(this.BASE_URL + "/items")
    }

}