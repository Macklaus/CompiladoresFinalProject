import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Place } from './../../models/place.model';

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
    return this.httpClient.get(this.placeurl).pipe(
      map((response: Place[]) => {
        response = response.reverse();
        return response;
      }),
    );
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

  edit(
    name: string,
    description: string,
    placeId: string,
  ): Observable<{}> {
    let url = this.placeurl.concat('/'.concat(placeId));
    return this.httpClient.put(
      url,
      JSON.stringify({ name: name, description: description }),
      this.httpOptions,
    );
  }

  delete(placeId: string): Observable<{}> {
    let url = this.placeurl.concat('/'.concat(placeId));
    return this.httpClient.delete(url);
  }
}
