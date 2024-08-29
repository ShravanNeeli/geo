

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, tap } from "rxjs";

import { Router } from "@angular/router";
import { User } from "../auth/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private signupUrl='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBVK2Ut5IBUa02v9gkg4frZHju-XIAJxE0';
  private loginUrl='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBVK2Ut5IBUa02v9gkg4frZHju-XIAJxE0';
  
  public user = new BehaviorSubject<User| null>(null);

  private tokenExpiresin: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  signup(email: string, password: string) {
    const data = { email: email, password: password, returnSecureToken: true };
    return this.http.post<any>(this.signupUrl, data).pipe(
      tap((res: any) => {
        this.handleAuthentication(res);
      })
    );
  }

  login(email: string, password: string) {
    const data = { email: email, password: password, returnSecureToken: true };
    return this.http.post<any>(this.loginUrl, data).pipe(
      tap((res: any) => {
        this.handleAuthentication(res);
      })
    );
  }

  private handleAuthentication(res: any) {
    const user = new User(
      res.email,
      res.localId,
      res.idToken,
      res.expiresIn
    );
    this.user.next(user);
    localStorage.setItem('userdata', JSON.stringify(user));
    this.autoLogout(res.expiresIn);
  }

  autoLogin() {
    const userDataString = localStorage.getItem('userdata');
    if (!userDataString) {
      return;
    }

    const userData = JSON.parse(userDataString);
    const user = new User(
      userData.email,
      userData.id,
      userData.token,
      userData._expiresIn
    );
    this.user.next(user);
    this.autoLogout(userData._expiresIn);
  }

  autoLogout(expiration: number) {
    this.tokenExpiresin = setTimeout(() => {
      this.logOut();
    }, expiration * 1000);
  }
  
  logOut() {
    this.user.next(null);
    this.router.navigate(['']);
    localStorage.removeItem('userdata');
    if (this.tokenExpiresin) {
      clearTimeout(this.tokenExpiresin);
    }
    this.tokenExpiresin = null;
  }
}
