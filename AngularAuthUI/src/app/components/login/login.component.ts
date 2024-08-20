import { Component, OnInit } from '@angular/core';
import { Login } from '../../model/login';
import { FormsModule } from '@angular/forms';
import { AuthentificationService } from '../../service/authentification.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { LoginResponse } from '../../model/login-response';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  login: Login = { email: '', motdepasse: '' };
  response: LoginResponse={} as LoginResponse;

  constructor(private authService: AuthentificationService) {}

  ngOnInit(): void {}

  hideShowPass() {
    this.isText = !this.isText;
    this.eyeIcon = this.isText ? "fa-eye" : "fa-eye-slash";
    this.type = this.isText ? "text" : "password";
  }

  onLogin() {
    this.authService.login(this.login).subscribe(
      (response: LoginResponse) => {
        this.response = response;
        console.log('Login successful', this.response);
        alert(response.message);
      },
      (error: HttpErrorResponse) => {
        console.error('Login failed', error.message);
      }
    );
  }
}
