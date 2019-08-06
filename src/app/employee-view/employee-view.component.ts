import {Component} from '@angular/core';
import {Employee} from './employee';

const ELEMENT_DATA: Employee[] = [
  {id: '1', name: 'Chewbacca', company: 'Ebon Hawk', age: 22, birthday: new Date(), favoriteColor: 'FFFFFF', projects: []},
  {id: '1', name: 'Chewbacca', company: 'Ebon Hawk', age: 22, birthday: new Date(), favoriteColor: 'FFFFFF', projects: []},
  {id: '1', name: 'Chewbacca', company: 'Ebon Hawk', age: 22, birthday: new Date(), favoriteColor: 'FFFFFF', projects: []},
  {id: '1', name: 'Chewbacca', company: 'Ebon Hawk', age: 22, birthday: new Date(), favoriteColor: 'FFFFFF', projects: []},
];

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent {
  displayedColumns: string[] = ['id', 'name', 'company', 'age', 'favoriteColor'];
  dataSource = ELEMENT_DATA;
}
