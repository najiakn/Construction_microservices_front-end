import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProjetServiceService } from 'src/app/Services/projet-service.service';
import { Projets } from 'src/Projet';

@Component({
  selector: 'app-ajouter-projet',
  templateUrl: './ajouter-projet.component.html',
  styleUrls: ['./ajouter-projet.component.css']
})
export class AjouterProjetComponent {
  nouveauProjet: Projets = {
    nom_projet: '',
    description_projet: '',
    date_debut: new Date(),
    date_fin: new Date(),
    budget: 0,
    id: 0
  };
constructor(private projetServiceService: ProjetServiceService,
  private router : Router,
) {}

  ajouterProjet() {
    this.projetServiceService.ajouterProjet(this.nouveauProjet).subscribe(
      response => {
        console.log('Projet ajouté avec succès', response);
        this.router.navigateByUrl("afficher-projet");
      },
      error => {
        console.error('Erreur lors de l\'ajout du projet', error);
      }
    );
  }
}
