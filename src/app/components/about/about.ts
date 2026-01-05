import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../reveal.directive';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  activeTab: string = 'skills';

  skillsList: string[] = [
    'UI/UX Design','Full-stack Development', 'Database Administrator', 'Project Management' // Other key skills
  ];

  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
  }

}
