import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login',
   loadChildren: () => import('./modules/login/login-routing.module').then(m => m.LoginRoutingModule) },
  { path: 'weather', 
  loadChildren: () => import('./modules/weather/weather-routing.module').then(m => m.WeatherRoutingModule) },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
