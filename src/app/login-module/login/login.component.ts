import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private loginService: LoginService, private authService: AuthService, private router: Router) { }


  onSubmit() {
    this.loginService.doLogin(this.profileForm.value)
      .subscribe({
        next: data => {
          this.storeToken(data.id_token)
          this.router.navigateByUrl("/items")
        },
        error: error => {
          error.status == 401 ? alert("wrong password") : ""
        }
      });
  }


  private storeToken(token: string) {
    this.authService.storeJwtToken(token)
  }

}
