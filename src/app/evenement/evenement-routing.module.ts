import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListEvenementComponent } from './list-evenement/list-evenement.component';
const routes: Routes = [
  {path: 'Listevenement', component:ListEvenementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvenementRoutingModule { }
