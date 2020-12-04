import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCompletionWizardComponent } from './profile-completion-wizard.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProfileCompletionWizardComponent],
  exports: [ProfileCompletionWizardComponent],
  imports: [CommonModule, ProgressBarModule, RouterModule]
})
export class ProfileCompletionWizardModule {}
