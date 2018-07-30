import { ClientsComponent } from './clients/clients.component';
import { PoliciesComponent } from './policies/policies.component';
import { FooterComponent } from './shared/layout/footer.component';
import { HeaderComponent } from './shared/layout/header.component';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './register/register.component';
// import { fakeBackendProvider } from './helpers/fake.backend';
import { JwtInterceptor } from './helpers/jwt.interceptors';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './auth.guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { UserService } from './services/user.service';
import { AlertService } from './services/alert.service';
import { ClientService } from './services/client.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    UsersComponent,
    FooterComponent,
    HeaderComponent,
    PoliciesComponent,
    ClientsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    CommonModule,
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    PoliciesComponent,
    ClientService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
