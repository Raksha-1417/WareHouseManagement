import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserdetailsService } from '../userdetails.service';
import Swal from 'sweetalert2';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!:FormGroup
  userapi=environment.userdetailsapi;

  // admin=environment.adminapi;
  // isadmin:boolean = false;
  // submitted = false;

  // get f() {return this.loginForm.controls;}
  constructor(private formBuilder:FormBuilder, private router: Router,private auth:AuthService) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      Username:['',Validators.required],
      Password:["",Validators.required]
    })
  }
    onLogin(){
      if(this.loginForm.valid){
        console.log(this.loginForm.value)
        this.auth.login(this.loginForm.value)
        .subscribe({
          next:(res)=>{
            alert(res.message);
            this.loginForm.reset();
            this.router.navigate(['']);
          },
          error:(err)=>
          {
            alert(err?.console.error.message);
            
          }
        })


      }else{
       
        this.validateAllFormFields(this.loginForm);
        alert("this form is not valid")

      }
    }
  //   this.userdetailsService.validateAuth(false);
  //   // this.adminService.validateAdmin(false);
  //   this.loginForm = this.formBuilder.group({
  //     Username: ['',[Validators.required]],
  //     Password: ['', [Validators.required, Validators.minLength(6)]]
  //   });
  // }
  // login(){
  //   this.submitted = true;
  //   if (this.loginForm.invalid) {
  //     return ;
  //   }
  //   this.http.get<any>(this.userapi)
  //   .subscribe(res=>{
  //     const user=res.find((a:any)=>{
  //       return a.Username === this.loginForm.value.Username && a.Password=== this.loginForm.value.Password
  //     });
  //     if(user){
  //       const Toast = Swal.mixin({
  //         toast: true,
  //         position: 'top',
  //         showConfirmButton: false,
  //         timer: 3000,
  //         timerProgressBar: true,
  //       })
    
  //       Toast.fire({
  //         icon: 'success',
  //         title: 'Login Successful'
  //       })
  //       this.loginForm.reset();
  //       this.router.navigate([''])
  //       this.userdetailsService.validateAuth(true);
  //     }else{
  //       const Toast = Swal.mixin({
  //         toast: true,
  //         position: 'top',
  //         showConfirmButton: false,
  //         timer: 3000,
  //         timerProgressBar: true,
  //       })
    
  //       Toast.fire({
  //         icon: 'error',
  //         title: 'User not found'
  //       })       
  //       this.userdetailsService.validateAuth(false);
  //     }
  //   })

  // 
  private validateAllFormFields(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(field=>{
      const control=formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      }
      else if(control instanceof FormGroup){
        this.validateAllFormFields(control)

      }
      
    })
  }
  }

