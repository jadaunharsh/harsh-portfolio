import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  sideNav: boolean = true;
  nameList = {
    'About': './about',
    'Portfolio': './portfolio',
    'Contact': './contact',
    // 'Resume': './resume'
  }

  constructor() { }

  toggleSideNav() {
    this.sideNav = !this.sideNav
  }

}
