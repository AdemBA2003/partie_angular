import { Component, OnInit } from '@angular/core';
import { enseignant } from '../model/ensignant.model';
import { EnseignantService } from '../service/enseignant.service';
import { EtudiantService } from '../etudiant/etudiant.service';
import { HttpClient } from '@angular/common/http';
import { etudiant } from '../model/etudiant.model';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css'],
  providers: [EtudiantService]
})

export class EnseignantComponent implements OnInit {

  newEns = new enseignant();
  enseignant !: any[];
  submitted = false;
  form: boolean = false
  list_Ensei !: any

  i: any = 0;
  nbEnsignant: any;
  nbDeartements: any;
  nbListGarde: any
  nombreEnseignants !: number

  constructor(private serviceEnse: EnseignantService, private router: Router) {



  }

  public afficherEnseignant() {
    this.serviceEnse.getEnseignant().subscribe(res => {
      this.list_Ensei = res;
      console.log("list_Ensei", this.list_Ensei)
    });
  }


  addEnseignant(newE: any) {
    this.serviceEnse.addEnseignant(this.newEns).subscribe((res) => {
      this.form = false;
      console.log("newE", res)
      console.log("newE", this.newEns)
        ; this.afficherEnseignant()
    });


  }
  ngOnInit() {
    this.afficherEnseignant()

    console.log("slm", this.list_Ensei)
    this.serviceEnse.getNombreEnseignants().subscribe(
      res => {

        this.nombreEnseignants = res;
        console.log("nombreEnseignants", this.nombreEnseignants)
      }

    );

  }


  // Assurez-vous que vous obtenez un ID valide avant d'appeler deleteEnseignant
  deleteEnseignant(Id: any) {
    if (Id) {
      console.log("helloooo", Id);
      this.serviceEnse.deleteEnseignant(Id).subscribe(
        res => {
          console.log('Suppression réussie :', res);
          this.afficherEnseignant();
          this.router.navigate(['/enseignant']);
          console.log("ooo1");
        },
        error => {
          console.error('Erreur lors de la suppression :', error);
          console.log("ooo");
        }
      );
    } else {
      console.error('ID invalide. Impossible de supprimer.');
    }
  }




  updateEnseignant(Id: number) {
    this.router.navigate(['updateEnseignant', Id])
    console.log(enseignant)

  }



}




