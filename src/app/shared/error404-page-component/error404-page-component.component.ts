import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error404-page-component',
  templateUrl: './error404-page-component.component.html',
  styles: [
  ]
})
export class Error404PageComponentComponent {
  private router = inject(Router)

  goBackHome = () => {
    this.router.navigate(['profile/home']);
  }
}
