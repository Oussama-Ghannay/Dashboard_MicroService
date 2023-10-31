

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Music } from '../models/Music';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MusicService {


    // muscic
    public urlmusic= environment.defaultUrl+'service2/api/musicMS/music'

    public urltypes= environment.defaultUrl+'service2/api/musicMS/type'

  constructor(private http :HttpClient) { }


  /////////////////////get music

  
getMusics(){
  return this.http.get<any>(`${this.urlmusic}/allMusics`);

}


postMusic(data : any,id:number){
  return this.http.post<any>(`${this.urlmusic}/addMusic/${id}`,data);

}



updateMusic(data:any,id:number){

  return this.http.put<any>(`${this.urlmusic}/${id}`,data)
}


deleteMusic(id:number){
  return this.http.delete<any>(`${this.urlmusic}/${id}`)
}


  







  






}
