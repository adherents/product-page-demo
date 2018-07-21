import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'pp-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  max = 5;
  rate = 0;
  titles = ["Очень плохо", "Плохо", "Нормально", "Хорошо", "Отлично"];
  isReadonly = false;
  show: boolean = false;
 
  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.isReadonly = true;
    }
  }

  showMore() {
    this.show = !this.show;
  }
}
