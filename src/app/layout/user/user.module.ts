import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './containers/user/user.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { UserRoutingModule } from './user-routing.module';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserGuard } from './guards/user-guard';

@NgModule({
  declarations: [UserComponent, UserSettingsComponent, UserDetailsComponent],
  providers: [UserGuard],
  imports: [CommonModule, UserRoutingModule]
})
export class UserModule {}
