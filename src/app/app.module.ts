import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { MatToolbarModule } from '@angular/material/toolbar';  // Toolbar
import { MatButtonModule } from '@angular/material/button';    // Buttons
import { MatIconModule } from '@angular/material/icon';        // Icons
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';        // Cards
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import { ProjectComponent } from './project/project.component';
import {RegistreComponent} from "./registre/registre.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegistreComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule

    // Added MatCardModule for mat-card
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
