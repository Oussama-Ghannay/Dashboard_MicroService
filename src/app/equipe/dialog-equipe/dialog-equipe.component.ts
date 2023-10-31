import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { EquipeServicesService } from '../services/equipe-services.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Equipe } from '../models/Equipe';
import { HttpService } from '../services/http.service';
import { TypeMusic } from '../models/Type';


@Component({
  selector: 'app-dialog-equipe',
  templateUrl: './dialog-equipe.component.html',
  styleUrls: ['./dialog-equipe.component.css']
})
export class DialogEquipeComponent implements OnInit {

  // equipenew!: Equipe;

  typenew!: TypeMusic;



   typeForm !: FormGroup

   actionButton:string="Ajouter"

  constructor(private formBuilder : FormBuilder , private equipeService:EquipeServicesService,
              @Inject(MAT_DIALOG_DATA) public editdata:any,
              private matdialoRef  :MatDialogRef<DialogEquipeComponent>,private http: HttpService) { }



    

  ngOnInit(): void {


    this.typenew =  new TypeMusic();





    this.typeForm=this.formBuilder.group({

      name :['',[Validators.required,
                      Validators.pattern('[a-zA-Z ]*'),
                      Validators.minLength(3)] ],
    })


    console.log(this.editdata)
    
    if(this.editdata){

      this.actionButton="Modifier"

      this.typeForm.controls['name'].setValue(this.editdata.name)

    
    }


  }





  addType(){

    console.log(this.typeForm.value)

    if(!this.editdata){

      if(this.typeForm.valid){


      //  console.log("ggggg"+this.typeForm.controls['mail'].value);


       // this.equipeForm..="fffffffff";



      // this.equipeForm.controls['logo'].value="ddddddd";

     // this.equipeForm.controls['logo'].setValue("kkkkkkkkkkk")


        this.equipeService.postType(this.typeForm.value)
        .subscribe({
          next: (res)=>{
            alert("type ajoute avec succes");
            this.matdialoRef.close("ajout");


      this.typeForm.reset();



   

          },
          error:()=>{
            alert("erreur d'ajout")
          }
  
  
        })
      }
    }else{
      this.updateType()
    }

  }



  updateType(){

    this.equipeService.updateType(this.typeForm.value,this.editdata.id)
    .subscribe({
      next:(r)=>{
        alert("type bien modifiée")
        this.typeForm.reset()
        this.matdialoRef.close('update')
      },
      error:()=>{
        alert("error de modification")
      }
    })




  }



}

