import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import {HeatMapComponent} from './components/heat-map/heat-map.component';

const routes: Routes = [
    {path: '', redirectTo: '/heatmap', pathMatch: 'full'},    
    {path:'heatmap', component:HeatMapComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
