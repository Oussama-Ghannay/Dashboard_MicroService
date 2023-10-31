import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ServiceEvenementService } from 'src/app/service-evenement.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-evenement',
  templateUrl: './dialog-evenement.component.html',
  styleUrls: ['./dialog-evenement.component.css']
})
export class DialogEvenementComponent implements OnInit {
  evenementForm !: FormGroup
  actionButton:string="Ajouter"

  constructor(private formBuilder : FormBuilder , private evenementService:ServiceEvenementService,
    @Inject(MAT_DIALOG_DATA) public editdata:any,
    private matdialoRef  :MatDialogRef<DialogEvenementComponent>) { }

  ngOnInit(): void {
    this.evenementForm=this.formBuilder.group({

      nom :['',[Validators.required,
        Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)
      ]],

      description :['',[Validators.required,
        Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],

      date :['',Validators.required ],

      artiste :['',[Validators.required,
        Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],

      lieu :['',[Validators.required,
        Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],





    })




    console.log(this.editdata)

    if(this.editdata){
      this.actionButton="Modifier"
      this.evenementForm.controls['nom'].setValue(this.editdata.nom)
      this.evenementForm.controls['description'].setValue(this.editdata.description)
      this.evenementForm.controls['date'].setValue(this.editdata.date)
      this.evenementForm.controls['artiste'].setValue(this.editdata.artiste)
      this.evenementForm.controls['lieu'].setValue(this.editdata.lieu)


    }


  }





  addEvenement(){

    console.log(this.evenementForm.value)

    if(!this.editdata){
      if(this.evenementForm.valid){
        this.evenementService.postEvenement(this.evenementForm.value)
        .subscribe({
          next: (res)=>{
            alert("event ajoute avec succes");
            this.evenementForm.reset();
            this.matdialoRef.close("ajout");
          },
          error:()=>{
            alert("erreur d'ajout")
          }


        })
      }
    }else{
      this.updateEvenement()
    }

  }


  updateEvenement(){

    this.evenementService.updateEvenement(this.evenementForm.value,this.editdata.idEvent)
    .subscribe({
      next:(r)=>{
        alert("event bien modifiée")
        this.evenementForm.reset()
        this.matdialoRef.close('update')
      },
      error:()=>{
        alert("error de modification")
      }
    })




  }



}

