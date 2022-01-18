import { Injectable } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  Router,
} from '@angular/router';
import { KernelTopService } from '../service/kernel-top.service';

@Injectable({
  providedIn: 'root',
})
export class AccessGuard implements CanActivateChild {
  constructor(private _accessTop: KernelTopService, private route: Router) {}
  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // 排除轉址專用的 Component
    console.log(state);
    if (state.url == '/st140t') {
      return false;
    }
    console.log('accessTop=' + this._accessTop);
    return true;
  }
}
