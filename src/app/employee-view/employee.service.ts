import { Injectable } from '@angular/core';
import {Employee} from './employee';
import {Project} from '../project-view/project';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  projects: Project[] = [{id: 1, name: 'PicMonkey', teamSize: 8, clientName: 'PicMonkey'},
    {id: 2, name: 'Rolling pin', teamSize: 7, clientName: 'Peter'},
    {id: 3, name: 'Wirecard', teamSize: 6, clientName: 'Linkedin'},
    {id: 4, name: 'Milton', teamSize: 5, clientName: 'Linkedin'}];

  elements: Employee[] = [
    {id: 1, name: 'Bob', company: 'Google', age: 22, birthday: new Date(), favoriteColor: '#6e2f6b', project: this.projects[0]},
    {id: 2, name: 'Eve', company: 'parkside', age: 25, birthday: new Date(), favoriteColor: '#b2877e', project: this.projects[1]},
    {id: 3, name: 'Wall-E', company: 'Starship', age: 50, birthday: new Date(), favoriteColor: '#5ae094', project: this.projects[2]},
    {id: 4, name: 'Moana', company: 'Hawai', age: 18, birthday: new Date(), favoriteColor: '#c8aedb', project: this.projects[3]},
  ];

  constructor() { }

  public calculateAge(birthdate: Date): number {
    if (birthdate) {
      const timeDiff = Math.abs(Date.now() - new Date(birthdate).getTime());
      return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
  }

  public getAll(): Employee[] {
    return this.elements;
  }

  public getEmployeeById(id: number): Employee {
    const found = this.elements.filter(employee => {
      return employee.id === id;
    });
    return found[0];
  }

  delete(deleteEmployee: Employee): Employee[] {
    this.elements = this.elements.filter(employee => employee.id !== deleteEmployee.id);
    return this.elements;
  }

  update(updateEmployee: Employee) {
    const filteredElements = this.elements.filter(employee => employee.id !== updateEmployee.id);
    filteredElements.push(updateEmployee);
    this.elements = filteredElements;
    return this.elements;
  }

  createId(): number {
    return this.elements.length > 0 ? Math.max(...this.elements.map(employee => employee.id)) + 1 : 11;
  }

  add(employee: Employee): Employee[] {
    this.elements = [...this.elements, employee];
    return this.elements;
  }

  isEmpty(employee) {
    for (let key in employee) {
      if (employee.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
}
