import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  public url:string = "http://127.0.0.1:8000/contato";

  public getContactData(){
    return this.http.get(this.url)
  }
}
