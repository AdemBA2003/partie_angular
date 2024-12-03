import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationComponent } from './formation/formation.component';
import { NoteComponent } from './note/note.component';
import { ContactComponent } from './contact/contact.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { LoginComponent } from './login/login/login.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { etudiant } from './model/etudiant.model';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AccesGuard } from './guard/etudiant.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RelevedeNoteComponent } from './relevede-note/relevede-note.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { SupportCoursComponent } from './support-cours/support-cours.component';
import { CoursComponent } from './cours/cours.component';
import { ReclamationComponent } from './reclamation/reclamation.component';




const routes: Routes = [

  {path : 'formation', component : FormationComponent},
  {path : 'Acceuil' , component : AcceuilComponent},
  {path : 'contact' , component :ContactComponent},
  {path : 'etudiant' , component:NoteComponent },
  {path : 'enseignant' , component:EnseignantComponent },
  {path : 'login' , component:LoginComponent},
  {path : 'update/:Id' , component:UpdateEtudiantComponent , canActivate:[AccesGuard] },
  {path : 'ajouter' , component:AddEtudiantComponent   },
  {path : 'addEnseignant' , component:AddEnseignantComponent },
  {path : 'login-admin' , component:LoginAdminComponent},
  {path : 'updateEnseignant/:Id' , component:UpdateEtudiantComponent  , canActivate:[AccesGuard] },
  {path :'forbidden' , component:ForbiddenComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'ReleveDeNote',component:RelevedeNoteComponent },
  {path :'Test' , component:TestComponent},
  {path :'Test2' , component:Test2Component},
  {path :'support-cours' , component:SupportCoursComponent},
  {path :'cours' , component:CoursComponent},
  {path:'reclamation',component:ReclamationComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
