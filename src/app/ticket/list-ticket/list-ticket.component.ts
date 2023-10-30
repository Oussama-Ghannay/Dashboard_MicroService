import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogTicketComponent } from '../dialog-ticket/dialog-ticket.component';
import { ServiceTicketService } from 'src/app/service-ticket.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})

export class ListTicketComponent implements OnInit {
  displayedColumns: string[] = ['idTicket','prix','dateAchat','actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog,
    private ticketService:ServiceTicketService) {}

    openDialog() {
    this.dialog.open(DialogTicketComponent, {
    width:'30%'

    }).afterClosed().subscribe(val=>{
    if(val==='ajout'){
    this.getAllTickets()
    }
    });
    }

    ngOnInit(): void {
      this.getAllTickets()

    }





  nbr=0;
  getAllTickets(){
    this.ticketService.getTicket()
    .subscribe({
    next: (res)=>{
      this.nbr=res.length;// teb3a l'input property
    console.log(res);
    this.dataSource=new MatTableDataSource(res)
    console.log("heeeelooo");


    },
    error:()=>{
    alert("erreur get all")}})
      }




      editTicket(row :any) {
      this.dialog.open(DialogTicketComponent, {
      width:'30%',
      data:row

      }).afterClosed().subscribe(val=>{
      if(val==='update'){
      this.getAllTickets()
      }
      });;
      }







deleteTicket(id: number){
  this.ticketService.deleteTicket(id).subscribe( data => {
    alert("evenement bien supprimer")

    this.getAllTickets()


})
}








}
