import { Component } from '@angular/core';
import { enseignant } from '../model/ensignant.model';
import { EnseignantService } from '../service/enseignant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-enseignant',
  templateUrl: './update-enseignant.component.html',
  styleUrls: ['./update-enseignant.component.css']
})
export class UpdateEnseignantComponent {
  form : boolean = true;

  EnseignantCourant = new enseignant () ; 
  Enseignant!: enseignant;
  list_Enseignant!: any;
  constructor(public serviceEnsignant : EnseignantService, private route: ActivatedRoute  ){}
  ngOnInit(): void {
   
    this.serviceEnsignant.getEnseignantById(this.route.snapshot.params['Id']).subscribe(res => {
      this.list_Enseignant= [res]; // Wrap the result in an array
        console.log(this.list_Enseignant)
        
        }
        )
        
      }
  editEnseignant(en: enseignant){
    this.serviceEnsignant.editEnseignant(en).subscribe(res => {});
  }

}
