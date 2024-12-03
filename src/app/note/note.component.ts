import { Component } from '@angular/core';
import { etudiant } from '../model/etudiant.model';
import { EtudiantService } from '../etudiant/etudiant.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { interval } from 'rxjs';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ])
  ]

})
export class NoteComponent {
  etudiant!: etudiant[]
  list_Etud !: any 
  x !: any 
newE: number | undefined;
showPhrase: boolean = true; // Afficher la phrase dès le chargement

  
  constructor( private serviceEtud: EtudiantService , public authServ: AuthService ,  private router:Router)
 
  {
 }

  ngOnInit(){
    this.router.navigate(['etudiant'])
    this.afficherEtudiant();
    
    


}
public afficherEtudiant() {
  this.serviceEtud.getEtudiant().subscribe(res => {
    this.list_Etud = res;
    console.log(this.list_Etud);
  });
}



deleteEtudiant(Id: any) {
  console.log("helloooo")
  console.log("Id d utulisateur ",Id);
  this.serviceEtud.deleteEtudiant(Id).subscribe(
      res => {
          console.log('Suppression réussie :', res);
          this.afficherEtudiant()
          this.router.navigate(['/etudiant']); 
      },
      error => {
          console.error('Erreur lors de la suppression :', error);
      } 
  );
}


// editProduct(Etudiant : EtudiantService){
//   this.serviceEtud.editProduct(Etudiant).subscribe();
// }

updateEtudiant(Id : number )  
{console.log ("slm slm ",Id)
  
  this.router.navigate(['/update' , Id])
  console.log(etudiant)
  
}

addEtudiant(etudiant : etudiant[] )  
{
  this.router.navigate(['ajouter'])
 
  
}

}


 
 
