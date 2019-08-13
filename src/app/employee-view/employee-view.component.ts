import {Component} from '@angular/core';
import {Employee} from './employee';
import {EmployeeService} from './employee.service';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AddEmployeeDialogComponent} from './add-employee-dialog/add-employee-dialog.component';
import {EditEmployeeDialogComponent} from './edit-employee-dialog/edit-employee-dialog.component';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent {
  displayedColumns: string[] = ['name', 'company', 'age', 'favoriteColor', 'project' , 'actions'];
  dataSource: Employee[];

  constructor(private employeeService: EmployeeService, private router: Router, public dialog: MatDialog) {
    this.dataSource = employeeService.getAll();
  }

  deleteEmployee(employee: Employee) {
    this.dataSource = this.employeeService.delete(employee);
  }

  updateEmployee(employee: Employee) {
    this.router.navigateByUrl('/' + employee.id);
  }

  openAddDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(AddEmployeeDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(employee => {
      if (!this.employeeService.isEmpty(employee)) {
        this.dataSource = this.employeeService.add(employee);
      }
    });
  }

  openEditDialog(editEmployee: Employee) {
    const dialogRef = this.dialog.open(EditEmployeeDialogComponent, {
      width: '350px',
      disableClose: true,
      autoFocus: true,
      data: {
        id: editEmployee.id,
        name: editEmployee.name,
        company: editEmployee.company,
        age: editEmployee.age,
        birthday: editEmployee.birthday,
        favoriteColor: editEmployee.favoriteColor,
        project: editEmployee.project}});

    dialogRef.afterClosed().subscribe(employee => {
      if (!this.employeeService.isEmpty(employee)) {
        this.dataSource = this.employeeService.update(employee);
      }
    });
  }
}
