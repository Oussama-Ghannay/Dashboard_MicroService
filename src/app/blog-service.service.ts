import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {
 
  constructor( private http: HttpClient) { }

  getBlog() {
    return this.http.get("http://localhost:8083/api/blog/all").pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }

  deleteEvenement(id: number) : Observable<any[]>{
    return this.http.delete<[any]>("http://localhost:8083/api/blog/remove/"+id);
  }

  AddBlog(u: any):Observable<any>{
     
      return this.http.post<any>("http://localhost:8083/api/blog/add/",u)
    
     }
     private apiUrl = 'http://localhost:8083/api/blog/update/';

     editBlog(updatedBlogData: any): Observable<any> {
      return this.http.put<any>(`${this.apiUrl}`, updatedBlogData);
    }

    private apiid = 'http://localhost:8083/api/blog/get';
    getBlogid(blogId: number): Observable<any> {
      return this.http.get<any>(`${this.apiid}/${blogId}`);
    }
    deleteComment(id: number) : Observable<any[]>{
      return this.http.delete<[any]>("http://localhost:8083/api/blog/removecomment/"+id);
    }

    addCommentToBlog(blogId: number, comment: any): Observable<any> {
      return this.http.post<any>(`http://localhost:8083/api/blog/${blogId}/comment`, comment);
    
    }
    
}
