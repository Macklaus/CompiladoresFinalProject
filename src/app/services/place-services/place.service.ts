import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  private placeurl: string = 'http://localhost:3000/places';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<{}> {
    return this.httpClient.get(this.placeurl);
  }

  create(
    name: string,
    description: string,
    userId: string,
  ): Observable<{}> {
    return this.httpClient.post(
      this.placeurl,
      JSON.stringify({
        name: name,
        description: description,
        userId: userId,
      }),
      this.httpOptions,
    );
  }
}
