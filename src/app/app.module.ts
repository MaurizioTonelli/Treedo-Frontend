import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ClearNavbarComponent } from './shared/clear-navbar/clear-navbar.component';
import { WelcomeCardComponent } from './landing-page/welcome-card/welcome-card.component';
import { ExampleSectionComponent } from './landing-page/example-section/example-section.component';
import { LandingComponent } from './landing-page/landing/landing.component';
import { PlanCardComponent } from './premium-page/plan-card/plan-card.component';
import { PremiumComponent } from './premium-page/premium/premium.component';

@NgModule({
  declarations: [
    AppComponent,
    ClearNavbarComponent,
    WelcomeCardComponent,
    ExampleSectionComponent,
    LandingComponent,
    PlanCardComponent,
    PremiumComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
