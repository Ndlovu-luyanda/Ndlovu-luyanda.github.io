import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../reveal.directive';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, RevealDirective],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  projects = [
    {
      title: 'Convayor Offence Management System',
      description: 'Architected a cross-border digital solution to manage conveyance'
       +' operator fines across all ports of entry. I engineered a user-friendly Dashboard providing '
       +' real-time situational awareness, replacing manual workflows with a streamlined system that improves enforcement integrity and port authority efficiency.',
      image: '/projects/section50.png',
      link: '#contact',
      isPrivate: true,
      flipped: false
    },
     {
      title: 'Human Resource Management System',
      description:' Developed a multi-portal HR system for RainCloud Group, architecting Role-Based Access Control for Job Seekers, HR Managers, and Admins. I designed the high-conversion landing page and integrated Employee Portal, centralizing attendance and leave management into a user-centric digital interface.',
      image: '/projects/hrm_prj.png',
      link: '#contact',
      isPrivate: true,
      flipped: false
    },
     {
      title: 'Teleclinic Platform',
      description: 'Developed a health-tech platform bridging healthcare gaps for urban and rural communities through a unified digital ecosystem. I implemented real-time health monitoring dashboards, an AI assistant, '
      +' and secure provider search to ensure accessible, high-quality medical care for all users.',
      image: '/projects/teleclinic.png',
      link: '#contact',
      isPrivate: true,
      flipped: false
    },
     {
      title: 'Web Designer Portfolio',
      description: 'Executed the full visual identity for RainCloud Group, including logo design and a complex HRM portal prototype. Focused on user-centric layouts and Role-Based Access to simplify organizational workflows for four distinct user types.',
      image: '/projects/webdesigner.jpg',
      link: '#contact',
      isPrivate: true,
      flipped: false
    },
  ];
}
