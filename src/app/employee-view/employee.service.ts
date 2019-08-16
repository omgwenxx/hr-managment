import { Injectable } from '@angular/core';
import {Employee} from './employee';
import {Project} from '../project-view/project';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  elements: Employee[] = [
    {id: 1, name: 'Bob', company: 'Google', age: 22, birthday: new Date(), favoriteColor: '#6e2f6b', projectId: 1},
    {id: 2, name: 'Eve', company: 'parkside', age: 25, birthday: new Date(), favoriteColor: '#b2877e', projectId: 2},
    {id: 3, name: 'Wall-E', company: 'Starship', age: 50, birthday: new Date(), favoriteColor: '#5ae094', projectId: 3},
    {id: 4, name: 'Moana', company: 'Hawai', age: 18, birthday: new Date(), favoriteColor: '#c8aedb', projectId: 4},
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
    for (const key in employee) {
      if (employee.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
}
