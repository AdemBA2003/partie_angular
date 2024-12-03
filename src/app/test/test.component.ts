import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EtudiantService } from '../etudiant/etudiant.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { etudiant } from '../model/etudiant.model';
import { EnseignantService } from '../service/enseignant.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, width: '0', height: '0' }), // Définir l'opacité à 0 et les dimensions à 0 pour le départ
        animate('0.5s', style({ opacity: 1, width: '{{ imageWidth }}', height: '{{ imageHeight }}' })) // Animer vers une opacité de 1 et les dimensions de l'image
      ]),
      transition(':leave', [
        animate('0.5s', style({ opacity: 0, width: '0', height: '0' })) // Animer vers une opacité de 0 et les dimensions à 0
      ])
    ])
  ]
})
export class TestComponent {

  etudiant!: etudiant[]
  list_Ensei !: any 


  constructor(private serviceEnse: EnseignantService, private router: Router) {



  }

  public afficherEnseignant() {
    this.serviceEnse.getEnseignant().subscribe(res => {
      this.list_Ensei = res;
      console.log("list_Ensei", this.list_Ensei)
    });
  }
}


