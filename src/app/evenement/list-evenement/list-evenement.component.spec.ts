import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogEvenementComponent } from '../dialog-evenement/dialog-evenement.component';
import { ServiceEvenementService } from 'src/app/service-evenement.service';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-list-evenement',
  templateUrl: './list-evenement.component.html',
  styleUrls: ['./list-evenement.component.css']
})

export class ListEvenementComponent implements OnInit {
  displayedColumns: string[] = ['idEvent','nom','description','date','lieu','artiste','actions'];
  dataSource!: MatTableDataSource<any>;

  

  constructor(public dialog: MatDialog,
    private evenementService:ServiceEvenementService) {}

    openDialog() {
    this.dialog.open(DialogEvenementComponent, {
    width:'30%'

    }).afterClosed().subscribe(val=>{
    if(val==='ajout'){
    this.getAllEvenements()
    }
    });
    }

    ngOnInit(): void {
      this.getAllEvenements()

    }





  nbr=0;
  getAllEvenements(){
    this.evenementService.getEvenement()
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



    applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
    }
    }



      editEvenement(row :any) {
      this.dialog.open(DialogEvenementComponent, {
      width:'30%',
      data:row

      }).afterClosed().subscribe(val=>{
      if(val==='update'){
      this.getAllEvenements()
      }
      });;
      }







deleteEvenement(id: number){
  this.evenementService.deleteEvenement(id).subscribe( data => {
    alert("evenement bien supprimer")

    this.getAllEvenements()


})
}


exportEvenement(){
  this.evenementService.exportPdfEvenements().subscribe(x => {
    const blob = new Blob([x], { type: 'application/pdf' });
    const url= window.URL.createObjectURL(blob);
    const nav = (window.navigator as any);
if (nav.msSaveOrOpenBlob) {
  nav.msSaveOrOpenBlob(blob);
  return;
}

  const data = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href= data;
  link.download="evenement.pdf";
  link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));

  setTimeout(function() {
    window.URL.revokeObjectURL(data);
    link.remove();
  }, 100);
});

  }



  exportEvenementExcel(){
    this.evenementService.exportExcelEvenements().subscribe(x => {
      const blob = new Blob([x], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const n = (window.navigator as any);
if (n.msSaveOrOpenBlob) {
  n.msSaveOrOpenBlob(blob);
  return;
}
      const data = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = data;
      link.download="evenement.xlsx";
      link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));

      setTimeout(function() {
        window.URL.revokeObjectURL(data);
        link.remove();
      }, 100);
});

  }

}
