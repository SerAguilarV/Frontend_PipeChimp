import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DealsComponent } from './pages/deals/deals.component';
import { OrganizationsComponent } from './pages/organizations/organizations.component';
import { DealComponent } from './pages/deal/deal.component';
import { ExportPeopleComponent } from './components/export-people/export-people.component';


const routes: Routes = [
  {
    path: 'home', component : HomeComponent
  },
  {
    path: 'deals', component: DealsComponent
  },
  {
    path: 'orgs', component: OrganizationsComponent
  },
  {
    path: 'deal', component: DealComponent
  },
  {
    path: 'export', component: ExportPeopleComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
