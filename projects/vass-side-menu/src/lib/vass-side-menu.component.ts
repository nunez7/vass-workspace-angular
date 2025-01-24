import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500',
}

@Component({
  selector: 'lib-vass-side-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './vass-side-menu.component.html',
  styles: ``
})
export class VassSideMenuComponent {

  isAuthenticated = input(false);
  titleColor = input<TitleColor>(TitleColor.blue);

  title = input('VASS');
  subTitle = input('LATAM');

  signOut = output();
  signIn = output();
}
