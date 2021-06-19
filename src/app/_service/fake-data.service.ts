import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dummyData } from 'data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeDataService {
  constructor(private _http: HttpClient) {}

  getData(): Observable<any> {
    return of(dummyData);
  }
}
