import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private fireauth: AngularFireAuth;

  constructor(auth: AngularFireAuth) {
    this.fireauth = auth;
  }

  public login(email: string, senha: string): Promise<any>{
    return this.fireauth.signInWithEmailAndPassword(email, senha);
  }

  public isAuthenticated(): boolean {
    let token: string | null = localStorage.getItem('token');
    if (token === null) {
      return false;
    } else if (token === "true") {
      return true;
    }
    return false;
  }

  public logout(): Promise<any> {
    return this.fireauth.signOut();
  }
}
