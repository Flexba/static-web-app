import { Component } from '@angular/core';
import { ContactData } from './model/contactData';
import { environment } from '../../environments/environment';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.less']
})
export class ContactFormComponent {
  model = new ContactData();

  constructor(private http:HttpClient) {
  }

  send() {
    console.log(environment.mailApiUrl);
    let payload = JSON.stringify(this.model);

    this.http.post(environment.mailApiUrl, this.model)
    .subscribe(
      (val) => {
          console.log("POST call successful value returned in body", val);
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
  }
}
