import { MyExchange } from 'src/app/models/myexchange.model';
import { ExchangeService } from './../../services/exchange/exchange.service';
import { Component, OnInit } from '@angular/core';
import { MyResponse } from 'src/app/models/myresponse.model';

@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.component.html',
  styleUrls: ['./dolar.component.css'],
})
export class DolarComponent implements OnInit {
  exchange!: MyExchange;
  constructor(private exchangeService: ExchangeService) {}

  ngOnInit(): void {
    //this.exchangeService.cadToBrl().subscribe((response) => {
    //  this.cotacao_dia_brl = response.conversion_rates.BRL;
    //  //    this.cotacao_dia_usd = response.conversion_rates.USD;
    //});

    this.loadExchanges();
  }

  loadExchanges() {
    this.exchangeService.cadToBrl().subscribe((response) => {
      const dados: MyExchange = response;
      this.exchange = dados;
      console.log(dados);
      console.log(dados['conversion_rates']['USD']);
    });
  }
}
