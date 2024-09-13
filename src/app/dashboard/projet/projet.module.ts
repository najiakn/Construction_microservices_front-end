import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetRoutingModule } from './projet-routing.module';
import { ProjetComponent } from './projet.component';
import { AffciherComponent } from './affciher/affciher.component';
import { ModifierComponent } from './modifier/modifier.component';
import { SupprimerComponent } from './supprimer/supprimer.component';
import { AjouterComponent } from './ajouter/ajouter.component';


@NgModule({
  declarations: [
    ProjetComponent,
    AffciherComponent,
    ModifierComponent,
    SupprimerComponent,
    AjouterComponent
  ],
  imports: [
    CommonModule,
    ProjetRoutingModule
  ]
})
export class ProjetModule { }
