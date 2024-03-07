import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: '', component: LayoutComponent },
    { path: 'profile', component: ProfileComponent }
];
