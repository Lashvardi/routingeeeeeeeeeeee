import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home-geo',
  templateUrl: './home-geo.component.html',
  styleUrl: './home-geo.component.scss',
})
export class HomeGeoComponent {
  constructor(public dataService: DataService) {}
}
