import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogServiceService } from '../blog-service.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  formData: any = {
    title: '',
    description: '',
    image: ''
  };

  constructor(private blogService:BlogServiceService,private router: Router) { }

  ngOnInit(): void {
  }

  addBlog(): void {
    const blogData = {
      title: this.formData.title,
      description: this.formData.description,
      image: this.formData.image // Extract imageName
      // Other properties from the form
    };

    this.blogService.AddBlog(blogData).subscribe({
      next: (response) => {
        console.log('Blog added successfully!', response);
        this.router.navigate(['/blog']);
      },
      error: (err) => {
        console.error('Error adding blog:', err);
        // Handle error, e.g., show error message
      }
    });
  }
  handleFileInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const file = (inputElement.files as FileList)[0];
    if (file) {
      this.formData.image = file.name;
    }
  }
}
