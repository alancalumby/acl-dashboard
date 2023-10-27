import { ExchangeService } from './../../services/exchange/exchange.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.component.html',
  styleUrls: ['./dolar.component.css'],
})
export class DolarComponent implements OnInit {
  constructor(private exchangeService: ExchangeService) {}

  ngOnInit(): void {
    console.log(this.exchangeService.cadToBrl());
  }
}
