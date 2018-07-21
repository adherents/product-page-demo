import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
  selector: 'pp-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductInfoComponent {
  @ViewChild('staticTabs') staticTabs: TabsetComponent;
  
  public selectTabPrices() {
    this.staticTabs.tabs[1].active = true;
  }
  
  public selectTabReviews() {
    this.staticTabs.tabs[3].active = true;
  }

}
