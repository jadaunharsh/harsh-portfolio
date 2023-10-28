import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  projects = [
    {
      name: 'Personal Portfolio',
      description: {
        'Portfolio Showcase: ': 'The "Portfolio" section highlights a selection of my projects, complete with project names, descriptions, and images.',
        'About Me: ': 'Learn more about my background, skills, and interests in the "About" section.',
        'Contact Information: ': 'Reach out to me through the "Contact" section, where you can find my email and social media links.',
        'Continuous Updates: ': 'I frequently update my portfolio to include new projects and keep you informed about my latest endeavors.'
      },
      image: '/assets/images/harshimg.png',
    },
    {
      name: 'Material Demo',
      description: {
        'Dashboard: ': 'The "Dashboard" section highlights the mat card component use and how to use draggable material component.',
        'Demo Tab: ': 'Demo Tab contains the 2 tab, where in 1st component my first angular youtube video is rendered and in 2nd tab formal text is written.',
        'User List: ': 'In "User List" section a material table with some dummy data is shown which have sorting, paging and filtering functionality too.',
      },
      image: '/assets/images/MaterialDemoApp.png',
    },

  ];
}
