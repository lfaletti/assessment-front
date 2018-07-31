import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import 'hammerjs';
import { AlertComponent } from './alert/alert.component';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AuthGuard } from './auth.guard/auth.guard';
import { ClientsComponent } from './clients/clients.component';
import { ClientsResolve } from './clients/clients.resolve';
import { ClientService } from './clients/services/client.service';
// import { fakeBackendProvider } from './helpers/fake.backend';
import { JwtInterceptor } from './helpers/jwt.interceptors';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PoliciesComponent } from './policies/policies.component';
import { RegisterComponent } from './register/register.component';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { FooterComponent } from './shared/layout/footer.component';
import { HeaderComponent } from './shared/layout/header.component';
import { UsersComponent } from './users/users.component';


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
    ClientsResolve
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
