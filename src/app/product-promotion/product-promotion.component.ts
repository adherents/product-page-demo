import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryComponent } from 'ngx-gallery';

@Component({
  selector: 'pp-product-promotion',
  templateUrl: './product-promotion.component.html',
  styleUrls: ['./product-promotion.component.scss']
})
export class ProductPromotionComponent implements OnInit {
  @ViewChild('buttonsNavigationGallery') buttonsNavigationGallery: NgxGalleryComponent;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() : void {
    this.galleryOptions = [
      {
        "image": false, 
        "height": "110px",
        "width": "1000px",
        "thumbnailsArrows": false,
        "preview": false,        
        "thumbnailSize": "cover",
        "thumbnailsMoveSize": 3,
        "thumbnailsColumns": 6,
        "thumbnailsPercent": 100,
      },
      { "breakpoint": 1000, "width": "100%", "height": "110px", "thumbnailsColumns": 6 },
      { "breakpoint": 800, "width": "100%", "height": "110px", "thumbnailsColumns": 5 },
      { "breakpoint": 700, "width": "100%", "height": "110px", "thumbnailsColumns": 4 },
      { "breakpoint": 600, "width": "100%", "height": "110px", "thumbnailsColumns": 3 },
    ];

    this.galleryImages = [
      {
        small: 'https://imageserver.ibud.ua/first/2013/03/19/150x101x1/1418264558-1363705797-im008a.jpg',
        medium: '',
        big: ''
      },
      {
        small: 'https://imageserver.ibud.ua/second/2016/04/05/150x101x1/1459862892-1459861824_9416_phpw2hpdc.png',
        medium: '',
        big: ''
      },
      {
        small: 'https://imageserver.ibud.ua/third/2016/01/27/150x101x1/1453904818-1453904919_8660_phpuwqed4.jpg',
        medium: '',
        big: ''
      },
      {
        small: 'https://imageserver.ibud.ua/third/2014/02/14/150x101x1/1418209553-13923756055-liimikulp1.jpg',
        medium: '',
        big: ''
      },
      {
        small: 'https://imageserver.ibud.ua/second/2017/02/16/150x101x1/58a5ed44813831220-58a5c4fdb72be4559-1454331612-1454331837_2464_phpenbles.jpg',
        medium: '',
        big: ''
      },
      {
        small: 'https://imageserver.ibud.ua/third/2016/02/08/150x101x1/1454942074-1454941802_5253_phpe1yuka.jpg',
        medium: '',
        big: ''
      },
      {
        small: 'https://imageserver.ibud.ua/third/2017/02/16/150x101x1/58a5c4fdb72be4559-1454331612-1454331837_2464_phpenbles.jpg',
        medium: '',
        big: ''
      },
      {
        small: 'https://imageserver.ibud.ua/second/2016/01/26/150x101x1/1453801953-2357-1453801300-1453801490_6097_phpmkw2kf.jpg',
        medium: '',
        big: ''
      },
      {
        small: 'https://imageserver.ibud.ua/first/2016/09/29/150x101x1/1475150247-1475150140-deRmxC.jpg',
        medium: '',
        big: ''
      },
      {
        small: 'https://imageserver.ibud.ua/third/2016/01/26/150x101x1/1453797535-1453796457-1453796350_3837_php3az4tw.jpg',
        medium: '',
        big: ''
      },
      {
        small: 'https://imageserver.ibud.ua/first/2016/09/29/150x101x1/1475147416-1475147310-MS6i39.jpg',
        medium: '',
        big: ''
      },
      {
        small: 'https://imageserver.ibud.ua/third/2016/01/26/150x101x1/1453801300-1453801490_6097_phpmkw2kf.jpg',
        medium: '',
        big: ''
      },
      {
        small: 'https://imageserver.ibud.ua/second/2016/09/29/150x101x1/1475149185-1475149079-MupuIN.jpg',
        medium: '',
        big: ''
      },
      {
        small: 'https://imageserver.ibud.ua/third/2016/01/28/150x101x1/1453975821-1453975841_12714_phpeez223.jpg',
        medium: '',
        big: ''
      },
      {
        small: 'https://imageserver.ibud.ua/third/2016/09/19/150x101x1/1474289442-1474289354_11589_phpdpnfsh.jpg',
        medium: '',
        big: ''
      },
      {
        small: 'https://imageserver.ibud.ua/third/2016/01/27/150x101x1/1453905264-1453905458_5317_phpylvkfi.jpg',
        medium: '',
        big: ''
      },
      {
        small: 'https://imageserver.ibud.ua/first/2013/07/02/150x101x1/1418253305-137275513010-ksk.jpg',
        medium: '',
        big: ''
      },
      {
        small: 'https://imageserver.ibud.ua/third/2016/01/27/150x101x1/1453905041-1453905149_6323_php72vjob.jpg',
        medium: '',
        big: ''
      }
    ];
  }

  showNext(): void {
    this.buttonsNavigationGallery.thubmnails.moveRight();
  }

  showPrev(): void {
    this.buttonsNavigationGallery.thubmnails.moveLeft();
  }

}
