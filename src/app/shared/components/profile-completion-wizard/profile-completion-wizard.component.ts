import { Component, Input, OnInit } from '@angular/core';
import { Vendor } from '../../../layout/vendor/models/vendor';

@Component({
  selector: 'app-profile-completion-wizard',
  templateUrl: './profile-completion-wizard.component.html',
  styleUrls: ['./profile-completion-wizard.component.scss']
})
export class ProfileCompletionWizardComponent implements OnInit {
  @Input()
  vendor: Vendor;
  constructor() {}

  ngOnInit(): void {}
}
