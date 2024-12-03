import { Injectable } from '@angular/core';
import { EnseignantComponent } from '../enseignant/enseignant.component';
import { enseignant } from '../model/ensignant.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})


export class EnseignantService {
  [x: string]: any;
list_ensei !: enseignant[] ; 
  readonly API_URL ="http://localhost:8098/Enseignant"
  readonly API_URL1 ="http://localhost:8098/ajouter"
  readonly API_URL2 = "http://localhost:8098/count"; 
  readonly API_URL3 = "http://localhost:8098/Delete-Enseignant"; 
  readonly API_URL4 = "http://localhost:8098/retrieve-Enseignant"; 
  readonly API_URL5 = "http://localhost:8098/edit-Enseignant"; 


  constructor(private httpClient : HttpClient) {

this.list_ensei = [


  {

    CIN : 1919  ,
    Nom :  'soumaya',
    Prenom : 'mo3saba' ,
    list_gard : 'tekhdem fi sforecom ',
    list_departement : 'dima moch ajbeha '  ,



  }
];
   

   }
  
  getEnseignant()
  {
    return this.httpClient.get(`${this.API_URL}`)
  }
   
  

  getEnseignantById(id : any )
{
  const url = `${this.API_URL4}/${id}`
  return this.httpClient.get(url) || {}
}

addEnseignant(en : any){
  
  return this.httpClient.post(`${this.API_URL1}`, en);

}

// enseignant.service.ts

getNombreEnseignants(): Observable<number> {
  return this.httpClient.get<number>(`${this.API_URL2}`);
}

deleteEnseignant(id: any): Observable<any> {
  const url = `${this.API_URL3}/${id}`;
  return this.httpClient.delete(url);
}


editEnseignant(etudiant: enseignant): Observable<enseignant> {
  return this.httpClient.put<enseignant>(`${this.API_URL5}`, enseignant);
}




}





