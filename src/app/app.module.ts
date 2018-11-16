import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgxGalleryModule } from 'ngx-gallery';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RatingModule } from 'ngx-bootstrap/rating';
import { GoTopButtonModule } from 'ng2-go-top-button';
import { NgxPageScrollModule } from 'ngx-page-scroll';


import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { ProductHeaderComponent } from './product-header/product-header.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductPromotionComponent } from './product-promotion/product-promotion.component';
import { DescriptionComponent } from './product-info/description/description.component';
import { PricesComponent } from './product-info/prices/prices.component';
import { PropertiesComponent } from './product-info/properties/properties.component';
import { ReviewsComponent } from './product-info/reviews/reviews.component';
import { InstructionsComponent } from './product-info/instructions/instructions.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductHeaderComponent,
    ProductInfoComponent,
    ProductPromotionComponent,
    DescriptionComponent,
    PricesComponent,
    PropertiesComponent,
    ReviewsComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    TooltipModule.forRoot(),
    CollapseModule.forRoot(),
    NgxGalleryModule,
    TabsModule.forRoot(),
    RatingModule.forRoot(),
    GoTopButtonModule,
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
