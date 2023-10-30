import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogMusicComponent } from '../dialog-music/dialog-music.component';
import { MusicService } from '../services/music.service';



import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Music } from '../models/Music';



import * as XLSX from 'xlsx';


////pdf + screenshot////

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

/////////





@Component({
  selector: 'app-list-music',
  templateUrl: './list-music.component.html',
  styleUrls: ['./list-music.component.css']
})
export class ListMusicComponent implements OnInit {

 

  displayedColumns: string[] = ['detail','audio','title','album','actions'];
  dataSource!: MatTableDataSource<any>;
  
  ////
  haveDetails!:number;

  // public equipes!: Equipe[];

  public musics!: Music[];

  ////xsl

  fileName= 'ExcelSheetEquipe.xlsx';


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog,
              private musicService:MusicService) {}

  openDialog() {
    this.dialog.open(DialogMusicComponent, {
        width:'30%'
      
    }).afterClosed().subscribe(val=>{
      if(val==='ajout'){
        this.getAllMusics()
      }
    });
  }


  
  ngOnInit(): void {
    this.getAllMusics()
    console.log(this.getAllMusics())
    


    
  }






  getAllMusics(){
    this.musicService.getMusics()
    .subscribe({
      next: (data:Music[])=>{
        this.musics=data

   
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
    this.dialog.open(DialogMusicComponent, {
        width:'30%',
        data:row
      
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllMusics()
      }
    });;
  }





  deleteEquipe(id:number){

    this.musicService.deleteMusic(id)
    .subscribe({
      next: (res)=>{
        alert("equipe bien supprimer")
        this.getAllMusics()

      },
      error:()=>{
        alert("erreur de suppression")
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
    XLSX.utils.book_append_sheet(wb, ws, 'Liste des Equipes');
 
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
