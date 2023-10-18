import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit{
  
  
  newForm: FormGroup;
  nameError:boolean = false;
  emailError:boolean = false;

  constructor(private fb:FormBuilder) {
    this.newForm = this.fb.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]]
    })

    
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log(this.newForm.value);
    if (this.newForm.get('name')?.invalid) {
      console.log('Name is invalid!');
      this.nameError = true;
    }else this.nameError = false;

    if (this.newForm.get('email')?.invalid ) {
      console.log('Email not set or is invalid!');
      this.emailError = true;
    }else this.emailError = false;

    if (this.newForm.valid) {
      console.log('Form submitted successfully!');
    } else {
      console.log('Form is invalid!');
    }

   
  }

}
