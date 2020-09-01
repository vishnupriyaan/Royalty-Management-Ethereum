import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstname: any;
  lastname: any;
  email: any;
  mobile: any;
  password: any;
  confpassword: any;
  userType: any;
  userTypeList: any = [
    'User',
    'Artist',
    'Publisher',
  ];
  constructor() { }

  ngOnInit(): void {
  }

  formValidate(): boolean {
    if (
      (this.firstname === '' || this.firstname === undefined) ||
      (this.lastname === '' || this.lastname === undefined) ||
      (this.email === '' || this.email === undefined) ||
      (this.mobile === '' || this.mobile === undefined) ||
      (this.password === '' || this.password === undefined) ||
      (this.confpassword === '' || this.confpassword === undefined) ||
      (this.userType === '' || this.userType === undefined)

    ) {
      return true;
    } else {
      return false;
    }
  }

  signup(): void {
    console.log('Login');
  }
}
