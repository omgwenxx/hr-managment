import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() toggleClick = new EventEmitter<boolean>();
  openSidebar: boolean;

  constructor() {
    this.openSidebar = false;
  }

  toggleSidebar() {
    this.toggleClick.emit(!this.openSidebar);
    this.openSidebar = !this.openSidebar;
  }
}
