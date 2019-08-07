import {Component} from '@angular/core';
import {Employee} from './employee';
import {EmployeeService} from './employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent {
  displayedColumns: string[] = ['name', 'company', 'age', 'favoriteColor', 'actions'];
  dataSource: Employee[];

  constructor(private employeeService: EmployeeService, private router: Router) {
    this.dataSource = employeeService.getAll();
  }

  deleteEmployee(employee: Employee) {
    this.dataSource = this.employeeService.delete(employee);
  }

  updateEmployee(employee: Employee) {
    this.router.navigateByUrl('/' + employee.id);
  }
}
