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
import { MatCardModule } from '@angular/material/card';        // Cards

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule  // Added MatCardModule for mat-card
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
