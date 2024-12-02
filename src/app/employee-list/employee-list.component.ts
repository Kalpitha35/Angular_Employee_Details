import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  EmployeeForm :FormGroup
  employeeList: { ename: string; contactno: string; email: string; address: string }[] = [];


  constructor(private fb:FormBuilder){
    this.EmployeeForm = this.fb.group({
      ename:['',[Validators.required,Validators.pattern("[a-zA-Z]*")]],
      contactno:['',[Validators.required,Validators.pattern("[0-9]*")]],
      email:['',[Validators.required,Validators.email]],
      address:['',[Validators.required,Validators.pattern("[a-zA-Z0-9,]*")]],

    })
  }
  addEmployee(){
    this.employeeList.push({ename: this.EmployeeForm.value.ename,contactno: this.EmployeeForm.value.contactno,email: this.EmployeeForm.value.email,address: this.EmployeeForm.value.address})
  }
 
}