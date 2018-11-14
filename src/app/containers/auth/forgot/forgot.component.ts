import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent {
  constructor(
    private router: Router,
  ) { }

  goToLogin = () => {
    this.router.navigate(['/auth']);
  }

  goToRegister = () => {
    this.router.navigate(['/auth/register']);
  }
}
