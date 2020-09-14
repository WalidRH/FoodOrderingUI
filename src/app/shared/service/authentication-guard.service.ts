import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate{
  
  constructor( private authenticationService: AuthenticationService, private router: Router ) { }

 // tslint:disable-next-line: max-line-length
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  console.log('Route ', route);
  console.log('State ', state);

  return this.authenticationService.authenticatedUser.pipe(
    map(
      authenticatedUser => {
        return !!authenticatedUser;
      }
    ),
    // redirect if the user is not authenticated
    tap(
      authenticatedUser => {
        if (!authenticatedUser) {
          this.router.navigate(['/login']);
        }
        return authenticatedUser;
      }
    )
  );
 }


}
