import { Component } from '@angular/core';
import { NavbarComponent } from '../../ui-components/navbar/navbar.component';
import { BurgerMenuComponent } from '../../ui-components/burger-menu/burger-menu.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [NavbarComponent,BurgerMenuComponent,RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
