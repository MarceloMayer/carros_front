import { Component, OnInit } from '@angular/core';
import { HomeService } from "../services/home.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public parentData:any

  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.getHomeData()
  }

  public getHomeData(){
    this.homeService.getHomeData().subscribe((data:any)=>{
      console.log(data)
      this.parentData = data;
    })

  }

}
