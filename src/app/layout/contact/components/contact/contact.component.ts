import { Component, OnInit } from '@angular/core';
import { ContactForm } from './contact-form';
import { ContactFacadeService } from '../../services/contact-facade.service';
import { AlertService } from '../../../../shared/services/alert/alert.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: ContactForm = new ContactForm();
  response: any;

  contactDetails: any = {
    email: 'office@aprozi.ro',
    web: 'www.aprozi.ro'
  };

  constructor(private contactFacadeService: ContactFacadeService, private alertService: AlertService) {}

  ngOnInit(): void {}

  sendContactMessage() {
    this.contactFacadeService.sendMessage(this.contactForm.value).subscribe(() => {
      this.alertService.showSuccess('Mesajul a fost expediat');
      this.contactForm.reset();
    });
  }
}
