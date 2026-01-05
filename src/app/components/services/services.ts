import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../reveal.directive';

@Component({
  selector: 'app-services',
  imports: [CommonModule, RevealDirective],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {

}
