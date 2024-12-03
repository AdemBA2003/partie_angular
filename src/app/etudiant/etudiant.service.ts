import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { etudiant } from '../model/etudiant.model';
import id from 'date-fns/locale/id';
import { enseignant } from '../model/ensignant.model';


@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  addEnseignant(newE: enseignant) {
    throw new Error('Method not implemented.');
  }



  readonly API_URL ="http://localhost:8098/Etudiant"
  readonly API_URL1 ="http://localhost:8098/Delete"
  readonly API_URL2 ="http://localhost:8098/edit-Etudiant"
  readonly API_URL3 ="http://localhost:8098/ajout"
  readonly API_URL4 ="http://localhost:8098/retrieve-etudiant"

  list_Etud: any;
  serviceEtud: any;
  modalService: any;
  closeResult !: string;
  tab_etu!: etudiant[];
  
  

// readonly ENDPOINT_ETUDIANT = "/etudiant";
  constructor(private httpClient : HttpClient) { }


  getEtudiant()
  {
    return this.httpClient.get(`${this.API_URL}`)
  }



deleteEtudiant(id: any): Observable<any> {
  const url = `${this.API_URL1}/${id}`;
  console.log(url);
  return this.httpClient.delete(url);
}
editEtudiant(etudiant: etudiant): Observable<etudiant> {
  return this.httpClient.put<etudiant>(`${this.API_URL2}`, etudiant);
}

getEtudiantById(id : any )
{
  const url = `${this.API_URL4}/${id}`
  return this.httpClient.get(url) || {}
}


 addEtudiant(e : any){
  
    return this.httpClient.post(`${this.API_URL3}`, e);

  }

  
  verifierIdExiste(identifiant: string): Observable<{ existe: boolean }> {
    return this.httpClient.get<{ existe: boolean }>(`/api/verifierId/${identifiant}`);
  }




}

