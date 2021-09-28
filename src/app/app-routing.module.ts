import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about-us-page/about/about.component';
import { ContactComponent } from './contact-page/contact/contact.component';
import { HomeComponent } from './home-page/home/home.component';
import { LandingComponent } from './landing-page/landing/landing.component';
import { PaymentComponent } from './payment-page/payment/payment.component';
import { PremiumComponent } from './premium-page/premium/premium.component';
import { ProfileComponent } from './profile-page/profile/profile.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'premium', component: PremiumComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
