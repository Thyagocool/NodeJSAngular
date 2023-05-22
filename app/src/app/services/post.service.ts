import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroments';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  token:any = localStorage.getItem("Token")

  httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
  };

  API:string = `${environment.API}Posts`;

  constructor(private http: HttpClient) { }

  selectPosts():Observable<Post[]> {
    return this.http.get<Post[]>(this.API, this.httpOptions())
  }

  insertPost(data: Post):Observable<Post[]>{
    return this.http.post<Post[]>(this.API, data, this.httpOptions())
  }

  updatePost(id:number, data: Post):Observable<Post[]>{
    return this.http.put<Post[]>(`${this.API}/${id}`, data, this.httpOptions())
  }

  deletePost(id:number){
    return this.http.delete(`${this.API}/${id}`, this.httpOptions())
  }

}
