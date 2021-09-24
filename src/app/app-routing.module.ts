import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about-us-page/about/about.component';
import { ContactComponent } from './contact-page/contact/contact.component';
import { LandingComponent } from './landing-page/landing/landing.component';
import { PremiumComponent } from './premium-page/premium/premium.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'premium', component: PremiumComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
