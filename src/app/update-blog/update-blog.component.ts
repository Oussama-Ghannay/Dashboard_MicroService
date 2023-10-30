import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {
  blogId!: number; 
  blogData: any = {};
  constructor(private route: ActivatedRoute,private blogService: BlogServiceService,private router: Router) {
    this.blogId = 0;
   }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.blogId = idParam ? +idParam : 0;
    this.blogData = { title: '', description: '' };
    if (idParam) {
        this.getBlogData(this.blogId);
    }
   
  }
  getBlogData(blogId: number): void {
    this.blogService.getBlogid(blogId).subscribe((blog: any) => {
      this.blogData = blog;
    });
  }
  updateBlog(): void {
    // Assign the blog ID to the blog data being sent for update
    this.blogData.id = this.blogId;

    this.blogService.editBlog(this.blogData).subscribe({
      next: (response) => {
        console.log('Blog updated successfully!', response);
        this.router.navigate(['/blog']);
      },
      error: (err) => {
        console.error('Error updating blog:', err);
        // Handle error, e.g., show error message
      }
    });
  }

}
