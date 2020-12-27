import { Currency } from '../../../shared/models/currency';
import { localeMonths } from '../../../shared/enum/locale';

export class OrdersSummary {
  aggregated: Array<AggregatedOrders>;
  thisMonth: PeriodSummary;
  today: PeriodSummary;
  currency: Currency;

  constructor(orderSummaryResponse) {
    this.aggregated = orderSummaryResponse.aggregated.map((entry) => new AggregatedOrders(entry));
    this.thisMonth = orderSummaryResponse.this_month;
    this.today = orderSummaryResponse.today;
    this.currency = new Currency(orderSummaryResponse.currency);
  }
}

export class AggregatedOrders implements PeriodSummary {
  total: number;
  count: number;
  month: Date;
  monthName: string;

  constructor(props) {
    this.total = props.total;
    this.count = props.count;
    this.month = new Date(props.month);

    this.monthName = localeMonths.ro[this.month.getMonth()];
  }
}

export interface PeriodSummary {
  total: number;
  count: number;
}
