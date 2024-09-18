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
import { ModifierProjetComponent } from './projet/modifier-projet/modifier-projet.component';
import { SupprimerProjetComponent } from './projet/supprimer-projet/supprimer-projet.component';
import { AjouterProjetComponent } from './projet/ajouter-projet/ajouter-projet.component';        // Cards
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { AfficherProjetComponent } from './projet/afficher-projet/afficher-projet.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AfficherProjetComponent,
    ModifierProjetComponent,
    SupprimerProjetComponent,
    AjouterProjetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule  // Added MatCardModule for mat-card
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
