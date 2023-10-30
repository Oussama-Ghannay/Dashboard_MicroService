import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EvenementRoutingModule } from './evenement-routing.module';
import { ListEvenementComponent } from './list-evenement/list-evenement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogEvenementComponent } from './dialog-evenement/dialog-evenement.component';

import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon'


import { ServiceEvenementService } from 'src/app/service-evenement.service';


@NgModule({
  declarations: [
    ListEvenementComponent,
  
    DialogEvenementComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    EvenementRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
  MatTableModule,
  ],
  providers: [ServiceEvenementService],
})
export class EvenementModule { }
