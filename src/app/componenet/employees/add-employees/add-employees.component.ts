import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {

  addEmployeeRequest:Employee={
    id:'',
    name:'',
    email:'',
    phone:0,
    salary:0,
    department:''
  }
  constructor( private employeeService :EmployeesService,private router :Router) { }

  ngOnInit(): void {
  }
 addEmployee(){
  this.employeeService.addEmployee(this.addEmployeeRequest)
  .subscribe({
    next:(employee)=>{
      this.router.navigate(['employees'])
    }
  })
 }

  

}

