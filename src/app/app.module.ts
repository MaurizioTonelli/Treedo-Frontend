import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClearNavbarComponent } from './shared/clear-navbar/clear-navbar.component';
import { WelcomeCardComponent } from './landing-page/welcome-card/welcome-card.component';
import { ExampleSectionComponent } from './landing-page/example-section/example-section.component';
import { LandingComponent } from './landing-page/landing/landing.component';
import { PlanCardComponent } from './premium-page/plan-card/plan-card.component';
import { PremiumComponent } from './premium-page/premium/premium.component';
import { ContactComponent } from './contact-page/contact/contact.component';
import { ContactFormComponent } from './contact-page/contact-form/contact-form.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AboutComponent } from './about-us-page/about/about.component';
import { PresentationCardComponent } from './about-us-page/presentation-card/presentation-card.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ClearNavbarComponent,
    WelcomeCardComponent,
    ExampleSectionComponent,
    LandingComponent,
    PlanCardComponent,
    PremiumComponent,
    ContactComponent,
    ContactFormComponent,
    AboutComponent,
    PresentationCardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { panelClass: 'mat-panel', hasBackdrop: true },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
