import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projets } from 'src/Projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetServiceService {
  apiUrl: any;

  constructor(private http: HttpClient) { }
  
  // Méthode pour ajouter un nouveau projet
  ajouterProjet(projet: Projets): Observable<Projets> {
    return this.http.post<Projets>(`${this.apiUrl}/add`, projet);
  }

  // Méthode pour récupérer tous les projets
  allProjets(): Observable<Projets[]> {
    return this.http.get<Projets[]>(`${this.apiUrl}/all`);
  }

  updateProjets(id:number, Projets: Projets):Observable<Object>{
    return this.http.put(`${this.apiUrl}edit/${id}`, Projets);
  }
  // Méthode pour supprimer un projet
  deleteProjets(id: number): Observable<void> { // Utilisez Observable<void> car la réponse est vide
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
