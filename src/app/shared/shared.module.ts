import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HeaderComponent } from "./header/header.component";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { LoginService } from "./services/login.service";

@NgModule({
    declarations: [HeaderComponent],
    imports: [FlexLayoutModule, HttpClientModule],
    exports: [HeaderComponent, HttpClientModule],
    providers: [

    ]

})
export class SharedModule {

}