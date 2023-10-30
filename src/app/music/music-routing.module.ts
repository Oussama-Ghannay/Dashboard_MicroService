import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMusicComponent } from './list-music/list-music.component';









const routes: Routes = [
  {path:"listmusic",component: ListMusicComponent},
  
  // {path:"listmusic/detailsmusic/:id",component: DetailsEquipeC}


];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
