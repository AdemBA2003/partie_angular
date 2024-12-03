import { Component, OnInit } from '@angular/core';
import { EnseignantService } from '../service/enseignant.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit{
  nombreEnseignants!:any;
  constructor( private serviceEnse :EnseignantService,public authServ:AuthService) {}
  ngOnInit() {
    this.serviceEnse.getNombreEnseignants().subscribe(
      res => {

        this.nombreEnseignants = res;
        console.log("nombreEnseignants", this.nombreEnseignants)
      }  )}
}
