import { Injectable } from '@angular/core';
import { Ticket} from './Models/Ticket';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ServiceTicketService {

  urlApi = 'http://localhost:8084/api/event';  // URL de l'API

  constructor(private http: HttpClient ) {

   }

   getTicket(){
    return this.http.get<any>("http://localhost:8084/api/event/getTickets");

  }



  deleteTicket(id: number) : Observable<Ticket[]>{
    return this.http.delete<[Ticket]>(this.urlApi+"/deleteTicket/"+id);
  }



  postTicket(data : any){
    return this.http.post<any>("http://localhost:8084/api/event/addTicket",data);

  }


  updateTicket(data:any,id:number){

    return this.http.put<any>("http://localhost:8084/api/event/updateTicket/"+id,data)
    }

   getTicketById(id:Number){
     return this.http.get<Ticket>(this.urlApi+"/get/"+id);
   }

  
}
