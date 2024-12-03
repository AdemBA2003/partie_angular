import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { compte } from '../model/compte';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent  implements OnInit{
 
 
 
  user : compte = new compte( ) ;
  erreur : boolean = false ; 


  constructor(private authServ : AuthService, private router: Router) { }


  connected(){
    console.log(this.user);
    
    let permission: boolean = this.authServ.connect(this.user);
    console.log("Tentative de connexion :"+this.user.Email );
    if (permission){
      console.log("permission :"+permission );
      this.router.navigate(['/etudiant']); 
      
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
  
  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  ngOnInit() {
    
  }

}
