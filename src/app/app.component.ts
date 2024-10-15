import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './ui-components/navbar/navbar.component';
import { BurgerMenuComponent } from './ui-components/burger-menu/burger-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { WebApiService } from './Service/web-api.service';
import { HttpProviderService } from './Service/http-provider.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,LoginComponent,DashboardComponent,RegisterComponent,RouterLink,NavbarComponent,BurgerMenuComponent,
    HttpClientModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [WebApiService, HttpProviderService],
})
export class AppComponent {
  title = 'ecommy-adminpanel';
}
