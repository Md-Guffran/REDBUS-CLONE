import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Component/landing-page/landing-page.component';
import { SelectbusPageComponent } from './Component/selectbus-page/selectbus-page.component';
import { PaymentPageComponent } from './Component/payment-page/payment-page.component';
import { ProfilePageComponent } from './Component/profile-page/profile-page.component';
import { CarbonFootprintCalculatorComponent } from './components/carbon-footprint-calculator/carbon-footprint-calculator.component';
import { RouteDetailsComponent } from './Component/route-details/route-details.component';
import {BusBookingFormComponent} from './Component/selectbus-page/right/bus-booking-form/bus-booking-form.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'select-bus', component: SelectbusPageComponent },
  { path: 'payment', component: PaymentPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'carbon-footprint-calculator', component: CarbonFootprintCalculatorComponent },
  { path: 'route-details/:id', component: RouteDetailsComponent } ,
  { path: 'bus-booking-form', component : BusBookingFormComponent}// Add this line
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
