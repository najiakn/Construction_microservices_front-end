import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projets } from 'src/Projet';
import { ProjetServiceService } from 'src/app/services/projet-service.service';

@Component({
  selector: 'app-afficher-projet',
  templateUrl: './afficher-projet.component.html',
  styleUrls: ['./afficher-projet.component.css']
})
export class AfficherProjetComponent {
nouveauProjet: any;
ajouterProjet() {
throw new Error('Method not implemented.');
}
  projets: Projets[] = [];
  errorMessage: string = ''; // Ajout de la propriété errorMessage

  constructor(private projetServiceService: ProjetServiceService,
    private router:Router) {}

ngOnInit(): void {
this.loadProjets();
}

loadProjets(): void {
this.projetServiceService.allProjets().subscribe(
(data: Projets[]) => {
this.projets = data;
},
(error: any) => {
console.error('Erreur lors de la récupération des projets', error);
this.errorMessage = 'Une erreur est survenue lors du chargement des projets.'; // Attribution d'un message d'erreur
}
);
}

toTaches(id:number | undefined){
this.router.navigate(['taches', id])
}

addTache(id:number | undefined){
this.router.navigate(['taches/add', id])
}
}
