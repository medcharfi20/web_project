import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberComponent } from './member/member.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolsComponent } from './tools/tools.component';
import { EventsComponent } from './events/events.component';
import { ArticlesComponent } from './articles/articles.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'create',component:MemberFormComponent,pathMatch:'full'},
  {path:'',component:LoginComponent,pathMatch:'full'},
  {path:'edit/:id',pathMatch:'full',component:MemberFormComponent},
  {path:'member',pathMatch:'full',component:MemberComponent},
  {path:'dashboard',pathMatch:'full',component:DashboardComponent},
  {path:'tools',pathMatch:'full',component:ToolsComponent},
  {path:'events',pathMatch:'full',component:EventsComponent},
  {path:'articles',pathMatch:'full',component:ArticlesComponent},
  {path:'**',pathMatch:'full',component:MemberComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
