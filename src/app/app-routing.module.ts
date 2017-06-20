/**
 * Created by Or Adar on 6/18/2017.
 */
/**
 * Created by Or Adar on 6/15/2017.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports : [RouterModule.forRoot(appRoutes)],
  exports:  [RouterModule]
})

export class AppRoutingModule {

}

