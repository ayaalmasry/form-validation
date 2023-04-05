import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {EmpAddEditComponent} from './emp-add-edit/emp-add-edit.component';

import { FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private fb:FormBuilder ){}
  title = 'my-app';
  userForm=this.fb.group({
   firstName:['',Validators.required],
   lastName:['',Validators.required],
   
   address:this.fb.group({
     street:['',Validators.required],
     postcode:['',Validators.required]
   })
   
    
  
  });
  addUser(){
  console.log(this.userForm.value);
  }
 
 
}
