import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: '', component: HomePageComponent,},
    { path: 'home-page', component: HomePageComponent,},
    { path: 'about', component: AboutComponent,},
    { path: 'history-page', component: HistoryPageComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
