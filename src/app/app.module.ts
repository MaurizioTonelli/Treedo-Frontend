import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
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
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AboutComponent } from './about-us-page/about/about.component';
import { PresentationCardComponent } from './about-us-page/presentation-card/presentation-card.component';
import { LoginComponent } from './login/login.component';
import { DarkNavbarComponent } from './shared/dark-navbar/dark-navbar.component';
import { HomeComponent } from './home-page/home/home.component';
import { FileCardComponent } from './home-page/file-card/file-card.component';
import { PaymentComponent } from './payment-page/payment/payment.component';
import { ProfileComponent } from './profile-page/profile/profile.component';
import { PaymentSettingsComponent } from './profile-page/payment-settings/payment-settings.component';
import { AccountSettingsComponent } from './profile-page/account-settings/account-settings.component';
import { NotificationsSettingsComponent } from './profile-page/notifications-settings/notifications-settings.component';

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
    DarkNavbarComponent,
    HomeComponent,
    FileCardComponent,
    PaymentComponent,
    ProfileComponent,
    PaymentSettingsComponent,
    AccountSettingsComponent,
    NotificationsSettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    MatSelectModule,
    MatRadioModule,
    MatSidenavModule,
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
