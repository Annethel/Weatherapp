import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  url: string = "https://random-data-api.com/api/v2/users"

  constructor(private httpClient: HttpClient) { }

  getUsers = (): Observable<any> => {
    return this.httpClient.get<any>(this.url);
  }
}
