import { Component } from '@angular/core';
import { ContactData } from './model/contactData';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.less']
})
export class ContactFormComponent {
  model = new ContactData();

  send() {
    console.log(this.model.name);
    console.log('Test')
  }
}
