import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { ResultsPageComponent } from './results-page/results-page.component';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'homepage', component: HomepageComponent},
{ path: 'account', component: AccountPageComponent},
{path: 'results', component: ResultsPageComponent},
{path: '**', redirectTo: 'homepage'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
