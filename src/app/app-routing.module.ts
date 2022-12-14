import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDetailsComponent} from './user-details/user-details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'userdetails',component:UserDetailsComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
