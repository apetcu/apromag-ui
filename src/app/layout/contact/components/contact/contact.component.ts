import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactDetails: any = {
    email: 'office@apromag.ro',
    web: 'www.apromag.ro'
  };
  constructor() {}

  ngOnInit(): void {}
}
