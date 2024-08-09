import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  // გამოვიყენოთ ჩაშენებული სერვისი
  // რომელიც მოგვცემს წვდომას ჩვენს iD-ზე

  details: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    public data: DataService
  ) {
    this.activatedRoute.params.subscribe((param) => {
      this.details = data.getById(param['id']);
      console.log(this.details);
    });
  }
}
