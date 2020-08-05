import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DealCardComponent } from './components/deal-card/deal-card.component';
import { AboutComponent } from './pages/about/about.component';
import { SearchComponent } from './pages/search/search.component';
import { DealsComponent } from './pages/deals/deals.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { OrganizationsComponent } from './pages/organizations/organizations.component';
import { DealComponent } from './pages/deal/deal.component';
import {HttpClientModule} from '@angular/common/http';
import { ExportPeopleComponent } from './components/export-people/export-people.component';

@NgModule({
  declarations: [
    AppComponent,
    DealCardComponent,
    AboutComponent,
    SearchComponent,
    DealsComponent,
    HomeComponent,
    NavbarComponent,
    OrganizationsComponent,
    DealComponent,
    ExportPeopleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
