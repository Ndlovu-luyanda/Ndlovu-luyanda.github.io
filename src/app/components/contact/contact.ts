import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, NgForm } from '@angular/forms';
import { RevealDirective } from '../../reveal.directive';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, RevealDirective, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  form = { name: '', email: '', message: '' };
  sending = false;
  success = false;
  error = false;

  // call once if you want to init with user id:
  // emailjs.init('YOUR_PUBLIC_KEY'); // optional if you pass public key to send()

  sendEmail(contactForm?: NgForm, formEl?: HTMLFormElement) {
    if (!this.form.name || !this.form.email || !this.form.message) {
      if (formEl) {
        const controls = Array.from(formEl.querySelectorAll('input, textarea')) as HTMLInputElement[];
        controls.forEach(el => {
          if (!el.value) el.setCustomValidity('Please Fill all the fields');
          else el.setCustomValidity('');
          // remove custom message on input
          el.addEventListener('input', () => el.setCustomValidity(''));
        });
        formEl.reportValidity();
      } else {
        // fallback
        alert('Please Fill all the fields');
      }
      return;
    }
    this.sending = true;
    const serviceID = 'service_ygsb4ca';
    const templateID = 'template_lr3cv5f';
    const publicKey = 'YU8LLADgBJwiZC6Ab'; // EmailJS public key

    const templateParams = {
      from_name: this.form.name,
      from_email: this.form.email,
      message: this.form.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        this.sending = false;
        this.success = true;
        contactForm?.resetForm();
        this.form = { name: '', email: '', message: '' };
        setTimeout(() => (this.success = false), 4000);
      })
      .catch(() => {
        this.sending = false;
        this.error = true;
        setTimeout(() => (this.error = false), 4000);
      });
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
}
