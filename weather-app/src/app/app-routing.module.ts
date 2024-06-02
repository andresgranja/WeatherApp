import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WeatherAdminComponent } from './components/weather-admin/weather-admin.component';
import { DayAdminComponent } from './components/day-admin/day-admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'weather-admin', component: WeatherAdminComponent },
  { path: 'day-admin', component: DayAdminComponent },
  { path: '**', redirectTo: '/home' }  // Redirigir rutas no encontradas a la página de inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
