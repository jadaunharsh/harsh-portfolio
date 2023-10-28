import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  skills: string[] = ['C Sharp', 'Typescript', 'HTML & CSS', 'LINQ', 'SQL Server', 'Microservices']
}
