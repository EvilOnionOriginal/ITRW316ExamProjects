import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component'
import { ScheduleComponent } from './schedule/schedule.component'

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'start'
    },
    {
      path: 'start',
      component: StartComponent
    },
    {
      path: 'schedule/:userName',
      component: ScheduleComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }