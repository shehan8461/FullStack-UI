import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './componenet/employees/employee-list/employee-list.component';
import { AddEmployeesComponent } from './componenet/employees/add-employees/add-employees.component';
import { EditEmployeeComponent } from './componenet/employees/edit-employee/edit-employee.component';

const routes: Routes = [
  {
    path:'',
    component:EmployeeListComponent
  },
  {
    path:'employees',
    component:EmployeeListComponent
  },
  {
    path:'employees/add',
    component:AddEmployeesComponent
  },
  {
    path:'employees/edit/:id',
    component:EditEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
