import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetailEquipe } from '../models/DetailEquipe';
import { Equipe } from '../models/Equipe';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EquipeServicesService {

  public url= environment.defaultUrl+'/kaddem/equipe'

  public urldetails= environment.defaultUrl+'/kaddem/DetailEquipeC'


  // muscic
  public urlmusic= environment.defaultUrl+'service2/api/musicMS/music'

  public urltypes= environment.defaultUrl+'service2/api/musicMS/type'






  constructor(private http :HttpClient) { }



postEquipe(data : any){
  return this.http.post<any>(`${this.url}/add`,data);

}



getEquipe(){
  return this.http.get<any>(`${this.url}/all`);

}

/////////////////////get types

getTypes(){
  return this.http.get<any>(`${this.urltypes}/allTypes`);

}

postType(data : any){
  return this.http.post<any>(`${this.urltypes}/addType`,data);

}


updateType(data:any,id:number){

  return this.http.put<any>(`${this.urltypes}/${id}`,data)
}


deleteType(id:number){
  return this.http.delete<any>(`${this.urltypes}/${id}`)
}


  


/////////////////////////////////////////////////////////////




getEquipeById(idequipe:any){
  return this.http.get<any>(`${this.url}/getequipe/${idequipe}`);

}





updateEquipe(data:any,id:number){

return this.http.put<any>(`${this.url}/updateById/${id}`,data)
}


deleteEquipe(id:number){
  return this.http.delete<any>(`${this.url}/deleteEquipe/${id}`)
}





addDetailsToEquipe(details:any,idEquipe:number) {

  return this.http.put(`${this.url}/addDetails/${idEquipe}`,details)
}




//--------------------------details equipe---------------------------



deleteDetailsEquipe(iddetails:number){
  return this.http.delete<any>(`${this.urldetails}/deleteDetailEquipe/${iddetails}`)
}































//--------------------------details equipe---------JSON------------------


getDetailsEquipeById(idDetails:any){

  return this.http.get<any>("http://localhost:3000/DetailsEquipe/"+idDetails);



}

getDetalsEquipeByIdEquipe(ideq:any){
  return this.http.get<any>("http://localhost:3000/DetailsEquipe?idequipe="+ideq)
}



getDetalsEquipeBysalle(){
  return this.http.get<any>("http://localhost:3000/DetailsEquipe?salle=aa")
}

}
