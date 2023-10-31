import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {AppComponent} from "./app.component";
import { BlogComponent } from './blog/blog.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { ShowBlogComponent } from './show-blog/show-blog.component';
import { LoginuSERComponent } from './loginu-ser/loginu-ser.component';
import { RegisterComponent } from './register/register.component';




const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'addblog', component: AddBlogComponent },
  { path: 'blog/edit/:id', component: UpdateBlogComponent },
  { path: 'blog/:id', component: ShowBlogComponent },
  { path: 'login', component: LoginuSERComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'equipe', loadChildren: () => import('./equipe/equipe.module').then(e =>e.EquipeModule )},
  {path:'experience',  loadChildren:() =>import('./experience/experience.module').then(m=>m.ExperienceModule)},
  


  {path:'', component:HomeComponent},
  {
    path: 'etudiant',
    loadChildren:()=>import('./gestion-etudiant/gestion-etudiant.module').then(m=>m.GestionEtudiantModule)
  },

  {
    path: 'contrat',
    loadChildren: () => import('./gestion-contrat/gestion-contrat.module').then(m => m.GestionContratModule)
  },


{
  path:'listDepar',
  loadChildren:() =>import('./gestion-departement/gestion-departement.module').then(m=>m.GestionDepartementModule)
},
{
  path:'listUniv',
  loadChildren:() =>import('./gestion-universite/gestion-universite.module').then(e=>e.GestionUniversiteModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
