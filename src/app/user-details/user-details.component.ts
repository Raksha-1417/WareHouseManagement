import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { AuthService } from '../Services/auth.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  
  signUpForm!: FormGroup;
  // userurl = environment.userdetailsapi;
  // userdetailsForm = new FormGroup({
  //   Firstname: new FormControl(''),
  //   Lastname: new FormControl(''),
  //   Username:new FormControl(''),

  //   Useremail: new FormControl(''),
  //   Password: new FormControl(''),
  //   Address : new FormControl(''),
  //   Landmark : new FormControl(''),
  //   City : new FormControl(''),
  //   State: new FormControl(''),
  //   Country : new FormControl(''),
  //   Pincode : new FormControl(''),
  //   MobileNumber: new FormControl('')

    
  // })
  // authSubject: any;

  //submitted = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private auth:AuthService) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      Firstname: ['', Validators.required],
      Lastname: ['', Validators.required],
      Username: ['', Validators.required],
      Useremail: ['', Validators.required],
      Password: ['', Validators.required],
      Address: ['', Validators.required],
      Landmark: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required],
      Country: ['', Validators.required],
      Pincode: ['', Validators.required],
      MobileNumber: ['', Validators.required]

      
      
    })
  }
  // onRegister(){
  //   if(this.userdetailsForm.valid){
  //     this.auth.register(this.userdetailsForm.value).subscribe({
  //       next:(res=>{
  //         alert(res.message);
  //         this.userdetailsForm.reset();
  //         this.router.navigate(['login']);
  //       })
  //       ,error:(err=>{
  //         alert(err?.error.message)
  //       })
  //     })
  //     console.log(this.userdetailsForm.value)
  //   }else{
  //     this.validateAllFormFields(this.userdetailsForm)

  //   }
  // }
  onRegister(){

    if(this.signUpForm.valid){

      this.auth.register(this.signUpForm.value)

      .subscribe({

        next:(res=>{

          const Toast = Swal.mixin({

            toast: true,

            position: 'top',

            showConfirmButton: false,

            timer: 3000,

            timerProgressBar: true,

          })

     

          Toast.fire({

            icon: 'success',

            title: 'Signed Up Successfully'

          })

          //alert(res.message);

          this.signUpForm.reset();

          this.router.navigate([''])

        }),

        error:(err=>{

          const Toast = Swal.mixin({

            toast: true,

            position: 'top',

            showConfirmButton: false,

            timer: 3000,

            timerProgressBar: true,

          })

     

          Toast.fire({

            icon: 'error',

            title: 'Check Your Credentials'

          })

          //alert(err?.message)

        })

      })

      console.log(this.signUpForm.value)

    }else{

      this.validateAllFormFields(this.signUpForm)



    }

  }

  private validateAllFormFields(formGroup:FormGroup){

    Object.keys(formGroup.controls).forEach(field=>{

      const control = formGroup.get(field);

      if(control instanceof FormControl){

        control.markAsDirty({onlySelf:true});




      }else if(control instanceof FormGroup){

        this.validateAllFormFields(control)

      }

    })

  }
  //********************************REGISTER***************************************** */
  // onRegister(){
  //   if(this.userdetailsForm.valid){
  //     console.log(this.userdetailsForm.value)
  //     this.auth.register(this.userdetailsForm.value)
  //     .subscribe({
  //       next:(res)=>{
  //         alert(res.message);
  //         this.userdetailsForm.reset();
  //         this.router.navigate(['login']);
  //       },
  //       error:(err)=>
  //       {
  //         alert(err?.console.error.message);

          
  //       }
  //     })


  //   }else{
     
  //     // this.validateAllFormFields(this.userdetailsForm);
  //     alert("Not Submitted");
      

  //   }
  // }





  // private validateAllFormFields(formGroup:FormGroup){
  //   Object.keys(formGroup.controls).forEach(field=>{
  //     const control=formGroup.get(field);
  //     if(control instanceof FormControl){
  //       control.markAsDirty({onlySelf:true});
  //     }
  //     else if(control instanceof FormGroup){
  //       this.validateAllFormFields(control)

  //     }
      
  //   })
  // }

    // **********************************************************


  // get f() { return this.userdetailsForm.controls; }
  // submitHandler() {
  //   this.submitted = true;
  //   if (this.userdetailsForm.invalid) {
  //     return;
  //   }

  //   this.http.post<any>(this.userurl, this.userdetailsForm.value)
  //     .subscribe(res => {
  //       const Toast = Swal.mixin({
  //         toast: true,
  //         position: 'top',
  //         showConfirmButton: false,
  //         timer: 3000,
  //         timerProgressBar: true,
  //       })
    
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Sign Up Successful'
  //       })
  //       this.userdetailsForm.reset();
  //       this.router.navigate(['login']);
  //     })

  //}
}

