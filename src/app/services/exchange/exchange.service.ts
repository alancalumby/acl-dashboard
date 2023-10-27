import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { Exchange } from 'src/app/models/exchange.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  baseUrl: string = '';
  constructor(private http: HttpClient) {}

  cadToBrl(): Observable<Exchange> {
    //return EMPTY;
    const url = `${this.baseUrl}`;
    return this.http.get<Exchange>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    console.log('Ocorreu um erro!');
    return EMPTY;
  }
}
