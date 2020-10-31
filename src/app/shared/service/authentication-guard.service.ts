import { SharedUtilsService } from './shared-utils.service';
import { AuthenticationService } from './http-services/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { NotificationModule } from '../model/notification.module';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate{
  
  constructor( private authenticationService: AuthenticationService, private router: Router, private utilsService: SharedUtilsService ) { }

 // tslint:disable-next-line: max-line-length
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  console.log('Route ', route);
  console.log('State ', state);
  this.authenticationService.autoLogin();
  return this.authenticationService.authenticatedUser.pipe(
    map(
      authenticatedUser => {
        console.log('USER ', authenticatedUser);
        return !!authenticatedUser;
      }
    ),
    // redirect if the user is not authenticated
    tap(
      authenticatedUser => {
        console.log(' is authenticated ', authenticatedUser);
        if (!authenticatedUser ) {
          this.utilsService.notificationMessage.next(new NotificationModule('You are not AUTHENTICATED: please login', NotificationModule.STATUS_FAILED));
          this.router.navigate(['/login']);
        }
        return authenticatedUser;
      }
    )
  );
 }


}
