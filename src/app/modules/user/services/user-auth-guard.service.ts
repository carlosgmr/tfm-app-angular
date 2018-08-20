import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../../../shared/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuardService implements CanActivate {
  constructor(
    private storageService: StorageService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.storageService.isAuthenticated) {
      if (this.storageService.getAppUser().role === 'user') {
        return true;
      }

      this.storageService.removeCurrentSession();
    }

    this.router.navigate(['/login']);
    return false;
  }
}
