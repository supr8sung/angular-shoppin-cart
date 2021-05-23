import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }
    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {



        var token = this.authService.getJwtToken();
        return next.handle(
            token ?
                req.clone({
                    headers: req.headers
                        .set('Authorization', `Bearer ${token}`),
                    method: "GET"
                })
                :
                req);
    }
}


