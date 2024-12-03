import { Injectable } from '@angular/core';

import { compte } from '../model/compte';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users !: compte [] ; 
  userCourant !: string ; 
  userRole !: string ; 
  isConnected : boolean = false 
  role!: string;
  
  constructor( private Router : Router ) {
     
    this.users = [
      {
        Email: 'admin@gmail.com',
        mot_pass : 'azerty' ,
        Nom : 'Administrateur' ,
        role : 'ADMIN',

      },
      {
        Email: 'etudiant@gmail.com',
        mot_pass : 'azerty' ,
        Nom : 'etudiant' ,
        role : 'etudiant',

      },

    
 


    ];


   }

   connect(user : compte) : boolean {

    console.log(user);

    this.users.forEach((unUser) => {
    if(unUser.Email == user.Email && unUser.mot_pass==user.mot_pass ) { 
    this.isConnected =  true
    this.userCourant = unUser.Nom
    this.role = unUser.role
    console.log("Connexion de "+this.userCourant+  " - role :"+this.role)
    localStorage.setItem('userCourant',this.userCourant)
    localStorage.setItem('role',this.role)
    localStorage.setItem('isConnected',String(this.isConnected))
    }
    });
    return this.isConnected
    }



    disconnect(autoLogout: boolean = true) {
      this.isConnected = false;
      this.userCourant = "";
      this.role = "";
    
      if (autoLogout) {
        this.Router.navigate(['/login-admin']);
        localStorage.removeItem('userCourant');
        localStorage.removeItem('role');
        localStorage.removeItem('isConnected');
      }
    }

    
    testerAdmin():boolean{
      return this.role=='ADMIN'
      
  
     
   }

   testetudiant():boolean{
    console.log("🚀 ~ file: auth.service.ts:75 ~ AuthService ~ testerAdmin ~ this.role:", this.role)
    return this.role=='etudiant'
    

   
 }
   
   




   

 





}
