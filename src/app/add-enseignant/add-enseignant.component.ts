import { Component } from '@angular/core';
import { EnseignantService } from '../service/enseignant.service';
import { enseignant } from '../model/ensignant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.css']
})
export class AddEnseignantComponent {
  data !: any 
  submitted = false;  
  newEns = new enseignant() ; 
  form : boolean = false 
  router: any;

constructor( private serviceEnse: EnseignantService , public rout : Router ) { 
  this.newEns = new enseignant()
}

ogOnInit()
{
  this.submitted=false;  
}




saveEnseignant(newEns: any) {
  // Attribution manuelle de l'ID
 
  this.serviceEnse.addEnseignant(newEns).subscribe(
      (res) => {
          // Traitement réussi
          this.form = false;
          console.log("newEns", res);
          console.log("newEns", this.newEns);
          this.rout.navigate(['/enseignant']);
      },
      (err: any) => {
          // Gestion des erreurs
          console.log("full error", err);
          this.newEns = new enseignant();
      }
  );
}






}
