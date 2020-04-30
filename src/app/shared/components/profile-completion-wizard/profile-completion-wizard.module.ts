import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCompletionWizardComponent } from './profile-completion-wizard.component';

@NgModule({
  declarations: [ProfileCompletionWizardComponent],
  exports: [ProfileCompletionWizardComponent],
  imports: [CommonModule]
})
export class ProfileCompletionWizardModule {}
