import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './components/user/user.component';
import {UserSettingsComponent} from './components/user-settings/user-settings.component';
import {UserRoutingModule} from './user-routing.module';
import { UserDetailsComponent } from './components/user-details/user-details.component';


@NgModule({
    declarations: [UserComponent, UserSettingsComponent, UserDetailsComponent],
    imports: [
        CommonModule,
        UserRoutingModule
    ]
})
export class UserModule {
}
