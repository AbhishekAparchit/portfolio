import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-contact',
  imports: [
    FormsModule,ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
contactForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    message: new FormControl()
    
  });
  sendMessage() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Add your API call or email service here
      this.contactForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
contact: any;

}
