import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  data: any = [
    {
      id: 1, // იდენტიფიკატორი
      productName: 'Iphone 13',
      price: 300,
      description: 'Productis Agceriloba',
    },
    {
      id: 2, // იდენტიფიკატორი
      productName: 'Ford Mustang',
      price: 1200,
      description: 'Productis Agceriloba',
    },
  ];

  getById(id: number) {
    return this.data.find((item: any) => item.id == id);
  }
}
