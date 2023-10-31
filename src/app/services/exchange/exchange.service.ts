import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { MyExchange } from 'src/app/models/myexchange.model';
import { MyResponse } from 'src/app/models/myresponse.model';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  EXCHANGE_RATE_API_KEY = '';

  baseUrl: string =
    'https://v6.exchangerate-api.com/v6/' +
    this.EXCHANGE_RATE_API_KEY +
    '/latest/CAD';

  constructor(private http: HttpClient) {}

  /**
   * @deprecated The method should not be used. Use cadToBrl instead
   */
  cadToBrl2(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  cadToBrl(): Observable<MyExchange> {
    return this.http.get<MyExchange>(this.baseUrl);
  }

  errorHandler(e: any): Observable<any> {
    console.log('Ocorreu um erro!');
    return EMPTY;
  }
}
