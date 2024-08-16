import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductMngComponent } from './components/product-mng/product-mng.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrderMngComponent } from './components/order-mng/order-mng.component';
import { UserMngComponent } from './components/party-mng/user-mng/user-mng.component';
import { CustomerSprtComponent } from './components/customer-sprt/customer-sprt.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { CategoryMngComponent } from './components/product-mng/category-mng/category-mng.component';
import { VendorMngComponent } from './components/party-mng/vendor-mng/vendor-mng.component';
import { ProductReqComponent } from './components/product-mng/product-req/product-req.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'product-mng',
        component: ProductMngComponent,
      },
      {
        path: 'product-req',
        component: ProductReqComponent,
      },
      {
        path: 'category-mng',
        component: CategoryMngComponent,
      },
      {
        path: 'order-mng',
        component: OrderMngComponent,
      },
      {
        path: 'user-mng',
        component: UserMngComponent,
      },
      {
        path: 'vendor-mng',
        component: VendorMngComponent,
      },
      {
        path: 'cust-sup',
        component: CustomerSprtComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },

      {
        path: 'logout',
        component: DashboardComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
