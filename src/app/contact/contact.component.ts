import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(public contactService: ContactService) {}
  public email:string ="";
  public name:string ="";
  public phone:string ="";

  ngOnInit(): void {
    this.getData();
  }

  public getData() {
    this.contactService.getContactData().subscribe((data: any) => {
      console.log(data);
      this.email = data.email;
      this.name = data.name;
      this.phone = data.phone;
    });
  }
}
