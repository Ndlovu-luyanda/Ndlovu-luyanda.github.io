import {Component, signal, effect, inject, PLATFORM_ID  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMenuOpen = false;
  isDarkMode = signal(false);

   private platformId = inject(PLATFORM_ID);

   
  constructor() {
    
    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        // This block is now "SSR Safe"
        const body = document.body;
        if (this.isDarkMode()) {
          body.classList.add('dark-theme');
        } else {
          body.classList.remove('dark-theme');
        }
      }
    });
  }
  toggleTheme() {
    this.isDarkMode.update(prev => !prev);
  }

   toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}



 
}
