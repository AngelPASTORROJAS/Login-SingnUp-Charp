import { Component, OnInit } from '@angular/core';
import { SignIn } from '../../model/signIn';
import { AuthentificationService } from '../../service/authentification.service';
import { FormsModule } from '@angular/forms';
import { Message } from '../../model/message';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit{
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash"
  utilisateur: SignIn= {} as SignIn;
  response: Message={message:''};

  constructor(private api: AuthentificationService) {}
  ngOnInit(): void {}

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSignIn(){
    this.api.signIn(this.utilisateur).subscribe(
      (response: Message) => {
        this.response = response;
        console.log('Login successful', this.response);
        alert(response.message);
      },
      (error: HttpErrorResponse) => {
        console.error('Login failed', error.message);
      }
    )
  }
}
