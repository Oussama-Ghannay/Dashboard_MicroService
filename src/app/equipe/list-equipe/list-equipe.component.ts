import { Component, ElementRef, OnInit,Type,ViewChild } from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogEquipeComponent } from '../dialog-equipe/dialog-equipe.component';
import { EquipeServicesService } from '../services/equipe-services.service';



import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Equipe } from '../models/Equipe';

import { TypeMusic } from '../models/Type';



import * as XLSX from 'xlsx';


////pdf + screenshot////

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

/////////





@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {



  // displayedColumns: string[] = ['detail','logo','nomEquipe','mail','niveau','nbrDesMembresMax','actions'];

  displayedColumns: string[] = ['detail','name','actions'];




  dataSource!: MatTableDataSource<any>;
  
  ////
  haveDetails!:number;

  public equipes!: Equipe[];

  public types!: TypeMusic[];

  ////xsl

  fileName= 'ExcelSheetType.xlsx';


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog,
              private equipeService:EquipeServicesService) {}

  openDialog() {
    this.dialog.open(DialogEquipeComponent, {
        width:'30%'
      
    }).afterClosed().subscribe(val=>{
      if(val==='ajout'){
        this.getAllTypes()
      }
    });
  }


  
  ngOnInit(): void {
    this.getAllTypes()
    console.log("hhhhhhhhhhhhhhh>",this.getAllTypes())
    


    
  }






  getAllTypes(){
    this.equipeService.getTypes()
    .subscribe({
      next: (data:TypeMusic[])=>{
        this.types=data

   
        console.log("heeeelooo liste equipe");

        console.log(data);
        this.dataSource=new MatTableDataSource(data)
        
      

        this.dataSource.paginator=this.paginator
        this.dataSource.sort=this.sort
       
      },
      error:()=>{
        alert("erreur get all")
      }


    })
  


  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  editEquipe(row :any) {
    this.dialog.open(DialogEquipeComponent, {
        width:'30%',
        data:row
      
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllTypes()
      }
    });;
  }





  deleteEquipe(id:number){

    this.equipeService.deleteType(id)
    .subscribe({
      next: (res)=>{
        alert("type bien supprimé")
        this.getAllTypes()

      },
      error:()=>{
        alert("type supprimé")
      }


    })
     
  }



  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Liste types');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }








  
  public openPDF():void {
    let DATA = document.getElementById('excel-table');
 
    html2canvas(DATA!).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('C:/Users/MSI/Desktop/MINI PROJET')
        
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('angular-demo.pdf');
    });     
    }





    

}

