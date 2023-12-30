import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from './can-activate-guard';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  canActive!: CanActivateFn;

  constructor() {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.canActivate(route, state);
    return true;
  }
}
