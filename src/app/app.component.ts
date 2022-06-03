import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell';

  constructor(private router: Router) {}

  goToRemote(route: string) {
    this.router
      .navigate([route, 'hello im param form shell'])
      .then((res) => {
        console.log('res :', res);
      })
      .catch((err) => {
        console.log('error :', err);
        this.router.navigate(['/404'])
      });
  }
}
