import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccesGuard implements CanActivate {

  constructor(private authServ: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("acces autorisé");
    if (this.authServ.testerAdmin()) {
      
      return true ;
     
    } 
    else {
      this.router.navigate(['/forbidden']); 
      localStorage.removeItem('userCourant');
      localStorage.removeItem('role');
      localStorage.removeItem('isConnected');
      console.log("slm alikom inchalha takhtaf ")
      return false  ;
    }
  }
}
