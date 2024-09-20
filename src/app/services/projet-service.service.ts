import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projets } from 'src/Projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetServiceService {
  private apiUrl = 'http://localhost:8222/api/projets';

  constructor(private http: HttpClient) { }

  // Méthode pour ajouter un nouveau projet
  ajouterProjet(projet: Projets): Observable<Projets> {
    return this.http.post<Projets>(`${this.apiUrl}/create-projet`, projet);
  }

  // Méthode pour récupérer tous les projets
  allProjets(): Observable<Projets[]> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<Projets[]>(`${this.apiUrl}/all`,{ headers: headers || {} });
  }

  updateProjets(id:number, Projets: Projets):Observable<Object>{
    return this.http.put(`${this.apiUrl}edit/${id}`, Projets);
  }
  // Méthode pour supprimer un projet
  deleteProjets(id: number): Observable<void> { // Utilisez Observable<void> car la réponse est vide
    return this.http.delete<void>(`${this.apiUrl}/delete-projet/${id}`);
  }



  private createAuthorizationHeader(): HttpHeaders | undefined {
    const jwtToken = localStorage.getItem('token');
    if (jwtToken) {
      console.log("JWT token found in local storage", jwtToken);
      return new HttpHeaders().set("Authorization", "Bearer " + jwtToken);
    } else {
      console.log("JWT token not found in local storage");
      return undefined;
    }

  }
}
