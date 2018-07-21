import { Component } from '@angular/core';

@Component({
  selector: 'pp-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent {
  show: boolean = false;

  showMore() {
    this.show = !this.show;
  }

}
