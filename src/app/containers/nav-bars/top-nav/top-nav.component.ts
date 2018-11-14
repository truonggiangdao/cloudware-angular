import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserStore } from '@app/store/user.store';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {
  constructor(
    private router: Router,
    private userStore: UserStore,
  ) {
    console.log(this.userStore);
  }

  goToLogin = () => {
    this.router.navigate(['/auth']);
  }

  goToRegister = () => {
    this.router.navigate(['/auth/register']);
  }

  logOut = () => {
    this.userStore.clear();
  }
}
