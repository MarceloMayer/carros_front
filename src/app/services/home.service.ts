import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public url:string = "http://127.0.0.1:8000/";

  constructor(private http: HttpClient) { }

  public getHomeData(){
    return this.http.get(this.url)
  }
}
