export class Currency {
  code: string;
  factor: number;
  symbol: string;

  constructor(currencyResponse) {
    this.code = currencyResponse.code;
    this.factor = currencyResponse.factor;
    this.symbol = currencyResponse.symbol;
  }
}
