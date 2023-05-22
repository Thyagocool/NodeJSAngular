import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroments';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:any = localStorage.getItem("token")

  httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    }
  };

  API:string = `${environment.API}users`;

  constructor(private http: HttpClient) { }

  selectUsers():Observable<User[]> {
    return this.http.get<User[]>(this.API, this.httpOptions())
  }

  insertUser(data: User):Observable<User[]>{
    return this.http.post<User[]>(this.API, data, this.httpOptions())
  }

  updateUser(id:number, data: User):Observable<User[]>{
    return this.http.put<User[]>(`${this.API}/${id}`, data, this.httpOptions())
  }

  deleteUser(id:number){
    return this.http.delete(`${this.API}/${id}`, this.httpOptions())
  }

}
