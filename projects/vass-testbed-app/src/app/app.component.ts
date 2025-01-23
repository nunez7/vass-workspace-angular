import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VassSideMenuComponent, TitleColor } from 'vass-side-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VassSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vass-testbed-app';

  TitleColor = TitleColor;
  isAuthenticated = signal(true);
}
