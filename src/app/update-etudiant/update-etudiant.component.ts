import { Component, OnInit } from '@angular/core';
import { etudiant } from '../model/etudiant.model';
import { EtudiantService } from '../etudiant/etudiant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {
  form: boolean = true;

  EtudiantCourant = new etudiant();
  Etudiant!: etudiant;
  list_Etud!: any;

  constructor(public serviceEtud: EtudiantService, private route: ActivatedRoute , private router:Router ) {

  }
  editEtudiant(etu: etudiant) {
    this.serviceEtud.editEtudiant(etu).subscribe(res => { });
    this.router.navigate(['/etudiant'])
  }
  ngOnInit(): void {

    this.serviceEtud.getEtudiantById(this.route.snapshot.params['Id']).subscribe(res => {
      this.list_Etud = [res]; 
      console.log("xxxxx",this.list_Etud)

    }
    )

  }
}
