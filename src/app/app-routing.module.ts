import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { WashingtonComponent } from './washington/washington.component';

const routes: Routes = [

{
  path: '',
  pathMatch: 'full',
  component: SanJoseComponent,
  children: []
},
{
  path: 'burbank',
  pathMatch: 'full',
  component: BurbankComponent,
  children: []
},
{
  path: 'chicago',
  pathMatch: 'full',
  component: ChicagoComponent,
  children: []
},
{
  path: 'dallas',
  pathMatch: 'full',
  component: DallasComponent,
  children: []
},
{
  path: 'sanjose',
  pathMatch: 'full',
  component: SanJoseComponent,
  children: []
},
{
  path: 'seattle',
  pathMatch: 'full',
  component: SeattleComponent,
  children: []
},
{
  path: 'washington',
  pathMatch: 'full',
  component: WashingtonComponent,
  children: []
}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }