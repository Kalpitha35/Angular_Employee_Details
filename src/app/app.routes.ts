import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path:"",component:LoginComponent
    },
    {
        path:"list",component:EmployeeListComponent
    }
];