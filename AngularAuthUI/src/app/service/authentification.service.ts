import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../model/message';
import { ApiService } from './api/api.service';
import { SignIn } from '../model/signIn';
import { Login } from '../model/login';
import { LoginResponse } from '../model/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  constructor(private api: ApiService) { }

  signIn(utilisateur: SignIn): Observable<Message> {
    return this.api.post<Message>('/Utilisateurs', utilisateur);
  }

  login(login: Login): Observable<LoginResponse> {
    return this.api.post<LoginResponse>('/api/Authentifications/authenticate', login);
  }
}
