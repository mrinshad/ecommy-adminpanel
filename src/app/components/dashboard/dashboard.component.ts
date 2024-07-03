import { Component } from '@angular/core';
import { NavbarComponent } from '../../ui-components/navbar/navbar.component';
import { BurgerMenuComponent } from '../../ui-components/burger-menu/burger-menu.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent,BurgerMenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
