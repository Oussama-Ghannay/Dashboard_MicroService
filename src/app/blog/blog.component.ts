import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { BlogServiceService } from '../blog-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  displayedColumns: string[] = ["id",'title','description','actions'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  
  constructor(public dialog: MatDialog,
    private blogService:BlogServiceService,private router: Router) { }

  ngOnInit(): void {
    this.getAllBlog();
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
}
