import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SpecialEventsComponent } from './components/special-events/special-events.component';
import { FormComponent } from './components/form/form.component';
import { FormGroupName } from '@angular/forms';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/events',
    pathMatch:'full'

  },
  {
    path:'events',
    component: EventsComponent
  },
  {
    path:'special',
    component:SpecialEventsComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'testForm',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
