import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ServiceTicketService } from 'src/app/service-ticket.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-ticket',
  templateUrl: './dialog-ticket.component.html',
  styleUrls: ['./dialog-ticket.component.css']
})
export class DialogTicketComponent implements OnInit {
  ticketForm !: FormGroup
  actionButton:string="Ajouter"

  constructor(private formBuilder : FormBuilder , private ticketService:ServiceTicketService,
    @Inject(MAT_DIALOG_DATA) public editdata:any,
    private matdialoRef  :MatDialogRef<DialogTicketComponent>) { }

  ngOnInit(): void {
    this.ticketForm=this.formBuilder.group({

      prix :['',[Validators.required
        
      ]],
      dateAchat:['',[Validators.required
      ]],





    })




    console.log(this.editdata)

    if(this.editdata){
      this.actionButton="Modifier"
      this.ticketForm.controls['prix'].setValue(this.editdata.prix)
      this.ticketForm.controls['dateAchat'].setValue(this.editdata.dateAchat)
      

    }


  }





  addTicket(){

    console.log(this.ticketForm.value)

    if(!this.editdata){
      if(this.ticketForm.valid){
        this.ticketService.postTicket(this.ticketForm.value)
        .subscribe({
          next: (res)=>{
            alert("ticket ajoute avec succes");
            this.ticketForm.reset();
            this.matdialoRef.close("ajout");
          },
          error:()=>{
            alert("erreur d'ajout")
          }


        })
      }
    }else{
      this.updateTicket()
    }

  }


  updateTicket(){

    this.ticketService.updateTicket(this.ticketForm.value,this.editdata.idTicket)
    .subscribe({
      next:(r)=>{
        alert("ticket bien modifiée")
        this.ticketForm.reset()
        this.matdialoRef.close('update')
      },
      error:()=>{
        alert("error de modification")
      }
    })




  }



}

