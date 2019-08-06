import { Component} from '@angular/core';
import {Project} from './project';

const ELEMENT_DATA: Project[] = [
  {id: '1', name: 'Chewbacca', teamSize: 22, clientName: 'Parkside'},
  {id: '1', name: 'Chewbacca', teamSize: 22, clientName: 'Parkside'},
  {id: '1', name: 'Chewbacca', teamSize: 22, clientName: 'Parkside'},
  {id: '1', name: 'Chewbacca', teamSize: 22, clientName: 'Parkside'}
];
@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent {

  displayedColumns: string[] = ['id', 'name', 'teamSize', 'clientName'];
  dataSource = ELEMENT_DATA;

}
