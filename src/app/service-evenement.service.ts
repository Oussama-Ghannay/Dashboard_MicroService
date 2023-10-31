import { Injectable } from '@angular/core';
import { Evenement} from './Models/Evenement';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ServiceEvenementService {

  urlApi = 'http://localhost:8084/api/event';  // URL de l'API

  constructor(private http: HttpClient ) {

   }

   getEvenement(){
    return this.http.get<any>("http://localhost:8084/api/event/getEvents");

  }
   /*getData(): Observable<Experience[]>{
    return this.http.get<Experience[]>(`${this.urlApi+"/getAllExperience"}`);
  }*/



  deleteEvenement(id: number) : Observable<Evenement[]>{
    return this.http.delete<[Evenement]>(this.urlApi+"/deleteEvent/"+id);
  }



  postEvenement(data : any){
    return this.http.post<any>("http://localhost:8084/api/event/addEvent",data);

  }
 /* addExperience(experience:Experience): Observable<Experience>{
    return this.http.post<Experience>(`${this.urlApi+"/add"}`,experience);
  }*/

  updateEvenement(data:any,id:number){

    return this.http.put<any>("http://localhost:8084/api/event/updateEvent/"+id,data)
    }
  /*UpdateExperience(id:number, experience: Experience){


    return this.http.put(`${this.urlApi+"/update/"+id}`,experience);
   }
*/
   getEvenementById(id:Number){
     return this.http.get<Evenement>(this.urlApi+"/getbyid/"+id);
   }

   exportPdfEvenements():Observable<Blob>{
    return this.http.get("http://localhost:8084/api/event/export/pdf", {responseType: 'blob' });
   }
    exportExcelEvenements():Observable<Blob>{
    return this.http.get("http://localhost:8084/api/event/export/excel", {responseType: 'blob' });
}
}
