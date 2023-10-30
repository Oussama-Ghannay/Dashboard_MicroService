import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogServiceService } from '../blog-service.service';

@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.css']
})
export class ShowBlogComponent implements OnInit {
  blogData: any = {};
  constructor(private route: ActivatedRoute, private blogService: BlogServiceService) { }

  ngOnInit(): void {
    const blogIdParam = this.route.snapshot.paramMap.get('id');
    if (blogIdParam) {
      const blogId: number = +blogIdParam; 
      this.blogService.getBlogid(blogId).subscribe((blog: any) => {
        this.blogData = blog;
      });
    }
  }
  deleteComment(commentId: number): void {
    // Logic to delete the comment with the specified commentId
    // You may use your service to perform the delete operation
    // For instance:
    this.blogService.deleteComment(commentId).subscribe((response) => {
     // refresh the blog data after successful deletion
      this.ngOnInit();
    }, (error) => {
      // handle errors during deletion
    });
  }
  newCommentContent: string = '';
  addComment(): void {
    if (this.newCommentContent) {
      
      const newComment = { content: this.newCommentContent };

      
      this.blogService.addCommentToBlog(this.blogData.id, newComment).subscribe((response) => {
  
        this.blogData.comments.push(response);  
        this.newCommentContent = ''; 
      }, (error) => {
        // Handle errors during comment addition
      });
    }
  }
  }

