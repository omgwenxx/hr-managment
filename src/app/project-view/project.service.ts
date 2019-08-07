import {Injectable} from '@angular/core';
import {Project} from './project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  elements: Project[] = [{id: 1, name: 'PicMonkey', teamSize: 8, clientName: 'PicMonkey'},
    {id: 2, name: 'Rolling pin', teamSize: 7, clientName: 'Peter'},
    {id: 3, name: 'Wirecard', teamSize: 6, clientName: 'Linkedin'},
    {id: 4, name: 'Milton', teamSize: 5, clientName: 'Linkedin'}];

  constructor() {
  }

  public getAll(): Project[] {
    return this.elements;
  }

  delete(deleteProject: Project): Project[] {
    this.elements = this.elements.filter(employee => employee.id !== deleteProject.id);
    return this.elements;
  }

  update(updateProject: Project) {
    const filteredElements = this.elements.filter(employee => employee.id !== updateProject.id);
    filteredElements.push(updateProject);
    this.elements = filteredElements;
    return this.elements;
  }

  createId(): number {
    return this.elements.length > 0 ? Math.max(...this.elements.map(project => project.id)) + 1 : 11;
  }
}
