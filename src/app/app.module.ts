import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDeteilsPageComponent } from './pages/contact-deteils-page/contact-deteils-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { NavBarComponent } from './cmps/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './cmps/page-not-found/page-not-found.component';
import { LoaderComponent } from './cmps/loader/loader.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ContactDeteilsPageComponent,
    StatisticPageComponent,
    ChartComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    NavBarComponent,
    PageNotFoundComponent,
    LoaderComponent,
    ContactEditPageComponent
  ],
  imports: [
    NgxChartsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
