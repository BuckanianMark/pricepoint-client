import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { map, of, switchMap, timer } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  registerForm!:FormGroup;
  errors!:string[]
  constructor(private fb:FormBuilder,private accountservice:AccountService,private router:Router){}
  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm = this.fb.group({
      displayName:[null,[Validators.required]],
      email:[null,
        [Validators.required,Validators.email],
        [this.validateEmailNotTaken()]],
      password:[null,[Validators.required]],
    });
  }
  onSubmit(){
    this.accountservice.register(this.registerForm.value).subscribe(res => {
      this.router.navigateByUrl('/shop')
    },err => {
      console.log(err)
      this.errors = err.errors;
    });
  }
  validateEmailNotTaken():AsyncValidatorFn{
    return control => {
      return timer(500).pipe(
        switchMap(() => {
          if(!control.value)
          {
            return of(null);
          }
          return this.accountservice.checkEmailExists(control.value).pipe(
            map(res => {
              return res ? {emailExists:true} : null
            })
          );
        })
      );
    }
  }
}
