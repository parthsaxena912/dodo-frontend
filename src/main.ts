import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

// Import all standalone components
import { AppComponent } from './app/app';
import { HomeComponent } from './app/components/home/home';
import { LoginComponent } from './app/components/login/login';
import { AdminDashboardComponent } from './app/components/admin-dashboard/admin-dashboard';
import { UserDashboardComponent } from './app/components/user-dashboard/user-dashboard';
import { PensionListComponent } from './app/pension-list/pension-list';
import { PensionEditComponent } from './app/pension-edit/pension-edit';
import { AddPensionerComponent } from './app/add-pensioner/add-pensioner';
import { ViewPensionComponent } from './app/view-pension/view-pension';
import { RegisterComponent } from './app/register/register.component';
import { EditPensionerComponent } from './app/edit-pensioner/edit-pensioner';
import { RaiseConcernComponent } from './app/raise-concern/raise-concern';
import { ViewConcernsComponent } from './app/view-concern/view-concern';
import { AdminConcernsComponent } from './app/admin-concern/admin-concern';
import { AnalyticsComponent } from './app/admin/analytics/analytics';
import { UserApplyInsuranceComponent } from './app/user-apply-insurance/user-apply-insurance';
import { AdminViewInsuranceComponent } from './app/admin-view-insurance/admin-view-insurance';
import { PaymentComponent } from './app/payment/payment';

// Define routes
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'user', component: UserDashboardComponent },
  { path: 'pensions', component: PensionListComponent },
  { path: 'edit-pension/:id', component: PensionEditComponent },
  { path: 'add-pensioner', component: AddPensionerComponent },
  { path: 'view-pension', component: ViewPensionComponent },
  { path: 'edit-pensioner/:id', component: EditPensionerComponent },
  { path: 'raise-concern', component: RaiseConcernComponent },
  { path: 'admin/view-concerns', component: ViewConcernsComponent },
  { path: 'admin-concerns', component: AdminConcernsComponent },
  { path: 'admin/analytics', component: AnalyticsComponent },
  { path: 'user/apply-insurance', component: UserApplyInsuranceComponent },
  { path: 'admin/insurance', component: AdminViewInsuranceComponent },
  { path: 'admin/payment', component: PaymentComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // default route
];

// Bootstrap the standalone application
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Angular router
    provideHttpClient(), // HttpClient for backend calls
  ],
}).catch((err) => console.error(err));
