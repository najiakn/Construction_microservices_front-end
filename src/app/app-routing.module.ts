import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import {LoginComponent} from "./login/login.component";
import {RegistreComponent} from "./registre/registre.component";
import { AfficherProjetComponent } from './projet/afficher-projet/afficher-projet.component';
import { AjouterProjetComponent } from './projet/ajouter-projet/ajouter-projet.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegistreComponent},
  {path:'home', component:HomeComponent},
   {path:'', component:HomeComponent},
  {path:'afficher-projet', component: AfficherProjetComponent},
  {path:'ajouter-projet', component: AjouterProjetComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
