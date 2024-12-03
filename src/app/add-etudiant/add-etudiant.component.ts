import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from '../etudiant/etudiant.service';
import { etudiant } from '../model/etudiant.model';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent {
 newE= new etudiant() ;
etudiant !: etudiant[];
submitted = false;  
  form: boolean=false
  list_Etud !: any 
constructor(  private serviceEtud : EtudiantService  , private router:Router )
{
  
 this.newE = new etudiant() ;

}




ajouterEtudiant(newE:etudiant) {

  this.serviceEtud.addEtudiant(this.newE).subscribe((res)=>{
    this.form=false;
    console.log("newE",res) 
     console.log("newE",this.newE) 
    ;});this.afficherEtudiant()
  this.router.navigate(['/etudiant'])

}




// ajouterEtudiant(newE: etudiant) {
//   this.serviceEtud.addEtudiant(newE).subscribe(
//     (res) => {
//       console.log("newE", res);
//       console.log("newE", newE); 
//       this.afficherEtudiant(); 
//       this.router.navigate(['/etudiant']); 
//     }
//   );
// }



ngOnInit() {  
  this.submitted=false;  
}

// saveEtudiant(E:any) {
  onSubmit() {
   this.serviceEtud.addEtudiant(this.newE).subscribe(
  (data: any) => {
    console.log("Success:", data);
    this.serviceEtud.getEtudiant();
    this.router.navigate(['/etudiant']);
  },
  (error: any) => {
    console.error("Full error:", error);
    this.newE = new etudiant();
  }
);

  }

  addProduct(E: any){
    this.serviceEtud.addEtudiant(E).subscribe(() => {
   //   this.getAllProducts();
      this.form = false;
    });
  }

  public afficherEtudiant() {
    this.serviceEtud.getEtudiant().subscribe(res => {
      this.list_Etud = res;
     // console.log(this.list_Etud);
    });
  }

  // addProduct(E: any){
  //   this.serviceEtud.addProduct(E).subscribe(() => {
  //     this.serviceEtud.getEtudiant();
  //     this.form = false;
  //   });
  }

