import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGeoComponent } from './home-geo/home-geo.component';
import { HomeEngComponent } from './home-eng/home-eng.component';
import { ErrorComponent } from './error/error.component';

// როუტების მასივი (მისამართების მასივი)
const routes: Routes = [
  // redirect to
  {
    path: '',
    redirectTo: '/home/geo',
    pathMatch: 'full',
  },
  {
    path: 'home/geo',
    component: HomeGeoComponent,
  },
  {
    path: 'home/eng',
    component: HomeEngComponent,
  },
  // wildcard route **
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
