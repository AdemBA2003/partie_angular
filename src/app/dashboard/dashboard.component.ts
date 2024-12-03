import { Component, OnInit } from '@angular/core';
import { EnseignantService } from '../service/enseignant.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  nombreEnseignants!:Number;
  constructor( private serviceEnse :EnseignantService , authService:AuthService){}
  ngOnInit() {
  

    this.serviceEnse.getNombreEnseignants().subscribe(
      res => {

        this.nombreEnseignants = res;
        console.log("nombreEnseignants", this.nombreEnseignants)
      }

    );

  }

}
