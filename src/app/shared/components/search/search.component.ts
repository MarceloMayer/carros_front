import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public search: any = {
    model:""
  }

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit():void {
    event?.preventDefault()
    console.log(this.search)
  }

}


