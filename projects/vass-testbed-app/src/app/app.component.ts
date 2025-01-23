import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VassSideMenuComponent } from 'vass-side-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VassSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vass-testbed-app';
}
