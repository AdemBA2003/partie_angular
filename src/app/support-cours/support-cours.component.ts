import { Component } from '@angular/core';
import { compte } from '../model/compte';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-support-cours',
  templateUrl: './support-cours.component.html',
  styleUrls: ['./support-cours.component.css']
})
export class SupportCoursComponent {


  user : compte = new compte( ) ;
  erreur : boolean = false ; 


  constructor(private authServ : AuthService, private router: Router) { }


  connected(){
    console.log(this.user);
    
    let permission: boolean = this.authServ.connect(this.user);
    console.log("Tentative de connexion :"+this.user.Email );
    if (permission){
      console.log("permission :"+permission );
      this.router.navigate(['/cours']); 
      
    }
    
    
    else
      this.erreur=true    
    }




    navigateToAccueil() {
      // Appeler la méthode de déconnexion sans déconnexion automatique
      this.authServ.disconnect(false);
      this.router.navigate(['/accueil']); // Assurez-vous d'utiliser le bon chemin
    }
    
    reset(){     
      this.erreur=false;
      
      
    }
















}
