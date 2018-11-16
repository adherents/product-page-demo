import { Component, Input } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';
import { ProductInfoComponent } from '../product-info/product-info.component';

@Component({
  selector: 'pp-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss']
})
export class ProductHeaderComponent {
  @Input() reviews: ProductInfoComponent;
  show: boolean = false;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  isCollapsedFirst = false;
  isCollapsedSecond = true;

  openPrices() {
    this.reviews.selectTabPrices();
  }

  openReview() {
    this.reviews.selectTabReviews();
  }

  constructor() { }

  ngOnInit(): void {

    this.galleryOptions = [
      {
        "imageSize": "contain",
        "imageSwipe": true,
        "imageArrows": false,
        "thumbnailsArrows": false,
        "preview": false,
        "width": "300px",
        "height": "400px",
        "thumbnailSize": "cover",
        "thumbnailsColumns": 4,
        "imagePercent": 75, "thumbnailsPercent": 17
      },
      { "breakpoint": 670, "width": "100%", "height": "80", "thumbnailsColumns": 4 },
      { "breakpoint": 599, "width": "80%", "height": "300px", "thumbnailsColumns": 6 },
    ];

    this.galleryImages = [
      {
        small: 'https://imageserver.ibud.ua/third/2016/02/02/67x67x1/1454413883-1454407390-1418209664-13923677249-a4peremichkiweb.jpg',
        medium: 'https://imageserver.ibud.ua/third/2016/02/02/298x298x1/1454413883-1454407390-1418209664-13923677249-a4peremichkiweb.jpg',
        big: 'https://imageserver.ibud.ua/third/2016/02/02/1024x1024x4/1454413883-1454407390-1418209664-13923677249-a4peremichkiweb.jpg'
      },
      {
        small: 'https://imageserver.ibud.ua/second/2016/02/02/67x67x1/1454413883-1454408611-perem_kran.jpg',
        medium: 'https://imageserver.ibud.ua/second/2016/02/02/298x298x1/1454413883-1454408611-perem_kran.jpg',
        big: 'https://imageserver.ibud.ua/second/2016/02/02/1024x1024x4/1454413883-1454408611-perem_kran.jpg'
      },
      {
        small: 'https://imageserver.ibud.ua/third/2016/02/02/67x67x1/1454413883-1454408612-perem_kran2.jpg',
        medium: 'https://imageserver.ibud.ua/third/2016/02/02/298x298x1/1454413883-1454408612-perem_kran2.jpg',
        big: 'https://imageserver.ibud.ua/third/2016/02/02/1024x1024x4/1454413883-1454408612-perem_kran2.jpg'
      }
    ];
  }

  showMore() {
    this.show = !this.show;
  }

}
