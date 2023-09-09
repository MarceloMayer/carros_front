import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public user: any = {
    email: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {}

  public login() {
    event?.preventDefault();
    console.log(this.user)
  }
}
