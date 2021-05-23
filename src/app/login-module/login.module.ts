import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./login/login.component";
import { ItemsComponent } from './items/items.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "../shared/interceptors/auth.interceptor";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [LoginComponent, ItemsComponent],
    imports: [SharedModule, ReactiveFormsModule, HttpClientModule, BrowserModule],
    exports: [LoginComponent],
    providers: [

    ]
})
export class LoginModule {

}