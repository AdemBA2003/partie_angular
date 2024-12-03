import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MenuComponent } from './composants/contact/menu/menu.component';
// import { ContactComponent } from './composants/contact/contact.component';
import { FormationComponent } from './formation/formation.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { HttpClientModule } from '@angular/common/http';
import { NoteComponent } from './note/note.component';
import { LoginComponent } from './login/login/login.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { compte } from './model/compte';
import {  NO_ERRORS_SCHEMA } from '@angular/core';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { UpdateEnseignantComponent } from './update-enseignant/update-enseignant.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RelevedeNoteComponent } from './relevede-note/relevede-note.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { SupportCoursComponent } from './support-cours/support-cours.component';
import { CoursComponent } from './cours/cours.component';
import { ReclamationComponent } from './reclamation/reclamation.component';


registerLocaleData(localeFr , 'fr'); 



@NgModule({
  declarations: [
    AppComponent,
    // MenuComponent,
    // ContactComponent,
    FormationComponent,
    AcceuilComponent,
    ContactComponent,
    EnseignantComponent,
    NoteComponent,
    LoginComponent,
    UpdateEtudiantComponent,
    AddEtudiantComponent,
    AddEnseignantComponent,
    LoginAdminComponent,
    UpdateEnseignantComponent,
    ForbiddenComponent,
    DashboardComponent,
    RelevedeNoteComponent,
    TestComponent,
    Test2Component,
    SupportCoursComponent,
    CoursComponent,
    ReclamationComponent,
    
    
    
    
   
  
   
  ],
  imports: [
    CommonModule ,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    CalendarModule.forRoot({ 
      provide: DateAdapter,
       useFactory: adapterFactory }),
    HttpClientModule,
    FormsModule,
    CommonModule, 
    BrowserModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }



