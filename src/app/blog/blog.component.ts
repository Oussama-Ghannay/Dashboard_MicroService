import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { BlogServiceService } from '../blog-service.service';
import { Router } from '@angular/router';
import { EtudiantService } from '../Services/etudiant.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  displayedColumns: string[] = ["id",'title','description','actions'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  
  constructor(public dialog: MatDialog,
    private blogService:BlogServiceService,private router: Router, private etudiantS : EtudiantService) { }

  ngOnInit(): void {
    this.getAllBlog();
   
  }

  goToAddBlog(): void {
    this.router.navigate(['/addblog']);
}
  nbr=0;
  getAllBlog() {
    this.blogService.getBlog().subscribe({
      next: (res: any) => { // Use 'any' for 'res' variable
        this.nbr = res.length;
        console.log(res);
        this.dataSource.data = res;
        // alert(this.dataSource);
      },
      error: () => {
        alert("Erreur while fetching data.");
      }
    });
  }
  deleteblog(id: number) {
    this.blogService.deleteEvenement(id).subscribe(
      () => {
        alert("Blog bien supprimé");
        this.getAllBlog();
      },
      (error) => {
        console.error("Error deleting the blog:", error);
        alert("Erreur lors de la suppression du blog.");
      }
    );
  }

  editBlog(blogId: number): void {
    this.router.navigate([`/blog/edit/${blogId}`]);
  }
  showBlog(blogId: number): void {
    this.router.navigate([`/blog/${blogId}`]); // Route to the single blog view
  }


  input!: any; 
  nombre = 4; 
  page = 1;
  exportPDF(){
    this.etudiantS.pdfExport().subscribe(data=>{
      const blob = new Blob([data], {type: 'application/pdf'});
      if(window.navigator &&   (window.navigator as any).msSaveOrOpenBlob){
        (window.navigator as any).msSaveOrOpenBlob(data);

        return;
      }
      const data1 = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = data1;
      link.download = "etudiant.pdf";
      link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));
      setTimeout(function(){
        window.URL.revokeObjectURL(data1);
        link.remove();
      }, 100);
    });

  }


  exportExcel(){
    this.etudiantS.excelExport().subscribe(data=>{
      const blob = new Blob([data], {type: 'application/pdf'});
      if(window.navigator &&   (window.navigator as any).msSaveOrOpenBlob){
        (window.navigator as any).msSaveOrOpenBlob(data);

        return;
      }
      const data1 = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = data1;
      link.download = "etudiant.xlsx";
      link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));
      setTimeout(function(){
        window.URL.revokeObjectURL(data1);
        link.remove();
      }, 100);
    });

  }


 
}
