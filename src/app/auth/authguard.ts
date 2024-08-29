
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map ,tap} from "rxjs/operators";
import { AuthService } from "../services/auth.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.auth.user.pipe(
      map(user => {
        // const isAuth = user ? true : false;
        const isAuth = !!user;
        if (isAuth) {
          return true;
        } else {
          return this.router.createUrlTree(['']);
        }
      })
    );
  }
}

