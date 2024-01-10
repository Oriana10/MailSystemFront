import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mail-system';

  showHead: boolean = false;

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd || event instanceof NavigationStart || event instanceof NavigationCancel || event instanceof NavigationError) {
        if (event['url'] == '/login' || event['url'] == '/register') {
          this.showHead = true;
        } else {
          this.showHead = false;
        }
      }
    });
  }
  
}
