import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent }     from './customers/customers.component';

const app_routes: Routes = [
  { path: '', component: CustomersComponent }
];

export const app_routing = RouterModule.forRoot(app_routes);