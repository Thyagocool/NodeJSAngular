import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
  };

  API:string = `${environment.API}login`;

  constructor(private http: HttpClient) { }

  login(data:any) {
    return this.http.post(this.API, data, this.httpOptions())
  }

}
