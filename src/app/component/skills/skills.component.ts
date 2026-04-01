import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [
    CommonModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
  {
    title: 'Programming',
    icon: '💻',
    items: [
      'Java',
      'JavaScript (ES6+)',
      'TypeScript',
      'HTML5',
      'CSS3 (Animations, Flexbox, Grid)'
    ]
  },
  {
    title: 'Android Development',
    icon: '📱',
    items: [
      'Android SDK',
      'Activities & Fragments',
      'RecyclerView',
      'REST API Integration',
      'Firebase (Auth, Firestore)',
      'MVVM Architecture',
      'Material UI (Android)'
    ]
  },
  {
    title: 'Frontend Development',
    icon: '🌐',
    items: [
      'Angular',
      'Responsive Web Design',
      'Component-Based Architecture',
      'Routing & Lazy Loading',
      'API Integration',
      'RxJS (Observables)'
    ]
  },
  {
    title: 'Backend & Database',
    icon: '🗄️',
    items: [
      'Firebase',
      'REST APIs',
      'JSON',
      'Basic Node.js & Express',
      'Local Storage / Session Storage'
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: '🛠️',
    items: [
      'Git & GitHub (Branching)',
      'VS Code',
      'Android Studio',
      'Postman',
      'Figma',
      'Chrome DevTools'
    ]
  },
  {
    title: 'Core Concepts',
    icon: '🧠',
    items: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'MVC / MVVM Architecture',
      'Clean Code Principles',
      'Debugging & Optimization'
    ]
  }
];

}
