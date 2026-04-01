import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  selectedFilter = 'all';

  projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio with clean UI.',
      technologies: 'HTML, CSS, Angular',
      image: '/port.png',
      category: 'web',
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'E-Commerce App',
      description: 'Shopping app with cart & payment system.',
      technologies: 'Java, Firebase',
      image: '/e-comm.jpeg',
      category: 'android',
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: 'Notes App',
      description: 'A simple Android app to manage daily notes.',
      technologies: 'Android,Java, Firebase',
      image: '/note.jpg',
      category: 'android',
      github: 'https://github.com/AbhishekAparchit/BrainDump1',
      live: 'https://drive.google.com/file/d/1Xa91vXiUC0mAZl2lzgD5SVF1LYvN56A4/view?usp=sharing'
    }
  ];

  filterProjects(category: string) {
    this.selectedFilter = category;
  }

  get filteredProjects() {
    if (this.selectedFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.selectedFilter);
  }

  
}
