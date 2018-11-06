import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userurl: string = 'http://localhost:3000';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  create(
    username: string,
    email: string,
    password: string,
  ): Observable<{}> {
    let url = this.userurl.concat('/users');
    return this.httpClient.post(
      url,
      JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
      this.httpOptions,
    );
  }

  login(username: string, password: string): Observable<{}> {
    let url = this.userurl.concat('/userslogin');
    return this.httpClient.post(
      url,
      JSON.stringify({
        username: username,
        password: password,
      }),
      this.httpOptions,
    );
  }
}
