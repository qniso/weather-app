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

  submit(){
    console.log(this.userProfile.value);
    localStorage.setItem('name',this.userProfile.controls['name'].value);
    localStorage.setItem('city',this.userProfile.controls['city'].value);
    this.router.navigate(['weather']);
  }
}
