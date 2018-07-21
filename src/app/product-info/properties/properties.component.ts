import {Component} from '@angular/core';

/**
 * @title Basic table
 */
@Component({
  selector: 'pp-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent {
  displayedColumns = ['property', 'value'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  property: string;
  value: string;
}

const ELEMENT_DATA: Element[] = [
  {property: 'Производитель:', value: 'AEROC'},
  {property: 'Тип бетона:', value: 'газобетон'},
  {property: 'Тип перемычки:', value: 'брусковая'},
  {property: 'Длина:', value: '1200 мм'},
  {property: 'Ширина:', value: '100 мм'},
  {property: 'Высота:', value: '250 мм'},
  {property: 'Масса:', value: '20.38 кг'},
  {property: 'Глубина опирания:', value: '150 мм'},
  {property: 'Расчетная нагрузка:', value: '1000 кгс/м'},
  {property: 'Класс бетона:', value: 'В2,5'},
  {property: 'Плотность бетона:', value: '500 кг/м3'},
  {property: 'Страна производитель:', value: 'Украина'}
];