import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductMngComponent } from './components/product-mng/product-mng.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrderMngComponent } from './components/order-mng/order-mng.component';
import { UserMngComponent } from './components/user-mng/user-mng.component';
import { CustomerSprtComponent } from './components/customer-sprt/customer-sprt.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path : 'dashboard',
        component: DashboardComponent
      },
      {
        path : 'product-mng',
        component: ProductMngComponent
      },
      {
        path : 'order-mng',
        component: OrderMngComponent
      },
      {
        path : 'user-mng',
        component: UserMngComponent
      },
      {
        path : 'cust-sup',
        component: CustomerSprtComponent
      },
      {
        path : 'settings',
        component: SettingsComponent
      },

      {
        path : 'logout',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
