import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatNativeDateModule} from '@angular/material/core';

import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TicketModule } from './ticket/ticket.module'
import { EvenementModule} from './evenement/evenement.module'
import { GestionEtudiantModule } from './gestion-etudiant/gestion-etudiant.module';
import { GestionContratModule } from './gestion-contrat/gestion-contrat.module';


import { ExperienceModule } from './experience/experience.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GestionDepartementModule } from './gestion-departement/gestion-departement.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BlogComponent } from './blog/blog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTable, MatTableModule } from '@angular/material/table';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { ShowBlogComponent } from './show-blog/show-blog.component';
 
import { LoginuSERComponent } from './loginu-ser/loginu-ser.component';
import { RegisterComponent } from './register/register.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    AddBlogComponent,
    UpdateBlogComponent,
    ShowBlogComponent,
 
    LoginuSERComponent,
       RegisterComponent
    


  ],
  imports: [
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    ExperienceModule,
    HttpClientModule,
    TicketModule,
    EvenementModule,
    GestionEtudiantModule,
    GestionContratModule,
    FormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    CommonModule,
    GestionDepartementModule,
    NgbModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule




  ],
  exports: [
    MatTableModule],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule { }
