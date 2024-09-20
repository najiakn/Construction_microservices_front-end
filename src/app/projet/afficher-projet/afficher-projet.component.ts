import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Projets} from "../../../Projet";
import { ProjetServiceService } from 'src/app/Services/projet-service.service';

@Component({
  selector: 'app-afficher-projet',
  templateUrl: './afficher-projet.component.html', // Chemin correct vers le template HTML
  styleUrls: ['./afficher-projet.component.css']
})
export class AfficherProjetComponent implements OnInit {
  projets: Projets[] = [];
  errorMessage: string = '';

  constructor(private projetServiceService: ProjetServiceService,
              private router: Router) {}

  ngOnInit(): void {
    this.loadProjets();
  }

  loadProjets(): void {
    this.projetServiceService.allProjets().subscribe(
      (data: Projets[]) => {
        this.projets = data;
        console.log(data);

      },
      (error: any) => {
        console.error('Erreur lors de la récupération des projets', error);
        this.errorMessage = 'Une erreur est survenue lors du chargement des projets.';
      }
    );
  }

  toTaches(id: number | undefined) {
    this.router.navigate(['taches', id]);
  }

  addProjet() {
    this.router.navigate(['ajouter-projet']);
  }
  deleteProjet(idProjet: number): void {
    if (confirm('Are you sure you want to delete this projet?')) {
      this.projetServiceService.deleteProjets(idProjet).subscribe(
        () => this.loadProjets(),
        error => this.errorMessage = 'Error deleting projet'
      );
    }
  }

}
