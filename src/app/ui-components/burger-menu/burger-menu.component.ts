import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CollapseDirective,
  TextColorDirective
} from '@coreui/angular';
import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    ButtonDirective,
    CollapseDirective,
    TextColorDirective,
    CardComponent,
    CardBodyComponent,
    NgIf,
    MatExpansionModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.css'
})
export class BurgerMenuComponent {
  constructor(public router: Router){}
  panelOpenState = signal(false);
  visible = [false, false];

  toggleCollapse(id: number): void {
    this.visible[id] = !this.visible[id];
  }
}
