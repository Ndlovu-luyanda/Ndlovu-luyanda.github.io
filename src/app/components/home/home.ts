import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { RevealDirective } from '../../reveal.directive';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  roles: string[] = ['Full Stack Developer', 'Project Manager', 'Database Administrator', 'UI/UX Designer'];
  
  displayText: string = '';
  private roleIndex: number = 0;
  private charIndex: number = 0;
  private isDeleting: boolean = false;
  private typingSpeed: number = 150;

  ngOnInit() {
    this.typeEffect();
  }

  downloadCV() {
    // Path: place your CV file at 'src/assets/Luyanda_CV.pdf'
    const assetPath = '/LuyandaNdlovuResume.pdf';

    fetch(assetPath)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.blob();
      })
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'LuyandaNdlovu_Resume.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      })
      .catch(err => {
        console.error('Failed to download CV:', err);
      });
  }

  typeEffect() {
    const currentRole = this.roles[this.roleIndex];
    
    if (this.isDeleting) {
      // Remove a character
      this.displayText = currentRole.substring(0, this.charIndex - 1);
      this.charIndex--;
      this.typingSpeed = 100; // Speed up when deleting
    } else {
      // Add a character
      this.displayText = currentRole.substring(0, this.charIndex + 1);
      this.charIndex++;
      this.typingSpeed = 150;
    }

    // Logic to switch between typing and deleting
    if (!this.isDeleting && this.charIndex === currentRole.length) {
      this.isDeleting = true;
      this.typingSpeed = 2000; // Pause at the end of the word
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      this.typingSpeed = 500; // Pause before starting next word
    }

    setTimeout(() => this.typeEffect(), this.typingSpeed);
  }
}
