import { SharedUtilsService } from './shared-utils.service';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './http-services/authentication.service';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RoleGuardService implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private route: Router
  ) {}

  // tslint:disable-next-line: max-line-length
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): | boolean | UrlTree  | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('Route ', route);
    console.log('State ', state);
    this.authenticationService.autoLogin();
    return this.authenticationService.authenticatedUser.pipe(
      map((authenticatedUser) => {
        console.log(' authenticated ? ', !!authenticatedUser, ' ROLE ', authenticatedUser.role );
        if (!!authenticatedUser && authenticatedUser.role === 'ADMIN') {
          console.log('Is ADMIN TRUE');
          return true;
        } else {
          console.log('Is ADMIN FALSE');
          this.route.navigate(['login']);
          return false;
        }
      })
    );
  }
}
