import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './cmps/page-not-found/page-not-found.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { authGuard } from './guards/auth.guard';
import { ContactDeteilsPageComponent } from './pages/contact-deteils-page/contact-deteils-page.component';
import { contactResolver } from './resolvers/contact.resolver';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'contact', component: ContactPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'contact/:contactId',
    component: ContactDeteilsPageComponent,
    canActivate: [authGuard],
    resolve: { contact: contactResolver }
  },
  { path: 'stat', component: StatisticPageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
