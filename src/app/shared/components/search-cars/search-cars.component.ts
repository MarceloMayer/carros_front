import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-cars',
  templateUrl: './search-cars.component.html',
  styleUrls: ['./search-cars.component.scss']
})
export class SearchCarsComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
