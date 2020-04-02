import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {UserSettingsComponent} from './components/user-settings/user-settings.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';


const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        pathMatch: 'prefix',
        children: [
            {
                path: '', component: UserDetailsComponent, pathMatch: 'prefix'
            },
            {
                path: 'settings', component: UserSettingsComponent, pathMatch: 'prefix'
            }
        ]
    }

];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class UserRoutingModule {
}
