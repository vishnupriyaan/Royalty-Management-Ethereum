import { Component, OnInit, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
  }

  formValidate(): boolean {
    if ((this.username === '' || this.username === undefined) || (this.password === '' || this.password === undefined)) {
      return true;
    } else {
      return false;
    }
  }

  login(): void {
  console.log('Login');
  }

}
