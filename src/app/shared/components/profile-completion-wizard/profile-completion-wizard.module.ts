import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCompletionWizardComponent } from './profile-completion-wizard.component';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [ProfileCompletionWizardComponent],
  exports: [ProfileCompletionWizardComponent],
  imports: [CommonModule, ProgressBarModule]
})
export class ProfileCompletionWizardModule {}
