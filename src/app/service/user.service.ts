import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UserModel } from '../model/user.model';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string ='https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }
  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.usersUrl)
  }
  
}
