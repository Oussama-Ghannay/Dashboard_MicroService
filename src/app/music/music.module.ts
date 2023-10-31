
import { DialogMusicComponent } from './dialog-music/dialog-music.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { ListMusicComponent } from './list-music/list-music.component';

import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';

// import { HttpService } from './services/http.service';

import { QRCodeModule } from 'angularx-qrcode';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { MusicService } from './services/music.service';







@NgModule({
  declarations: [
    ListMusicComponent,
    DialogMusicComponent
  ],
  imports: [
    CommonModule,
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
    QRCodeModule,
    NgxQRCodeModule,
    MusicRoutingModule
  ],
  providers: [MusicService],


})
export class MusicModule { }
