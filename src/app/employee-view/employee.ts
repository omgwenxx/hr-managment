import {Project} from '../project-view/project';

export class Employee {
  id: number;
  name: string;
  company: string;
  age: number;
  birthday: Date;
  favoriteColor: string;
  projects: Project[];
}
