import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  userProfile !: FormGroup;

  ngOnInit(): void {
   this.userProfile = this.initProfile();
  }
  private initProfile() {
    return new FormGroup({
      'name':new FormControl('',[
      Validators.pattern('^[a-zA-Z]*$'),
      Validators.required]),
      'city':new FormControl('',[
      Validators.pattern('^[a-zA-Z]*$'),
      Validators.required])
    })
  }
  get errorMessageForUserName(){
    if(this.userProfile.controls['name'].hasError('required')){
      return 'This form is reqired';
    } return this.userProfile.controls['name'].hasError('name')? 'Not a valid login' : 'Inputs must contain only English words.';
  }
  get errorMessageForUserCity(){
    if(this.userProfile.controls['сity'].hasError('required')){
      return 'This form is reqired';
    } return this.userProfile.controls['сity'].hasError('сity') ? 'Not a valid login' : 'Inputs must contain only English words.';
  }
  submit(){
    console.log(this.userProfile.value);
    localStorage.setItem('name',this.userProfile.controls['name'].value);
    localStorage.setItem('city',this.userProfile.controls['city'].value);
    this.router.navigate(['weather']);
  }
}
