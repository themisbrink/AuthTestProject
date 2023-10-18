import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  testArray1 = ['#', 'First', 'Last', 'Handle']
  testArray2 = [
    {name:'Mark', last:'Otto', handle:'@mdo'},
    {name:'Jacob', last:'Thorton', handle:'@fat'},
    {name:'Larry', last:'the Bird', handle:'@twitter'},
  ]

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private auth: AuthService) { }

  ngOnInit() {
     
    
  }

  registerUser() {
    console.log(this.registerForm.value);

     const user = {
       email: this.registerForm.value.email!,
       password: this.registerForm.value.password!
     };

    this.auth.registerUser(user).subscribe((value) => { // Returns observable
      console.log(value);
    })

  }

}
