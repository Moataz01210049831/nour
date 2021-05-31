import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllNewsComponent } from './components/all-news/all-news.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SinglepageComponent } from './components/singlepage/singlepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  {path:'homepage',component:HomepageComponent },
 {path:'allnews',component:AllNewsComponent, data: {
  title: 'allnews', 
  breadcrumb: [
    {
      label: 'Home',// pageOneID Parameter value will be add 
      url: '/homepage'
    },
    {
      label: 'News',// pageTwoID Parameter value will be add 
      url: ''
    }
  ]
},
 },
 {path:'homepage/:id',component:SinglepageComponent,data: {
  title: 'News Details', 
  breadcrumb: [
    {
      label: 'Home',// pageOneID Parameter value will be add 
      url: '/homepage'
    },
   
    {
      label: 'News Details',// pageTwoID Parameter value will be add 
      url: ''
    }
  ]
},
 },
{path:'homepage/allnews/:id',component:SinglepageComponent,data: {
  title: 'News Details', 
  breadcrumb: [
    {
      label: 'Home',// pageOneID Parameter value will be add 
      url: '/homepage'
    },
    {
      label: 'News',// pageTwoID Parameter value will be add 
      url: '/allnews'
    },
    {
      label: 'News Details',// pageTwoID Parameter value will be add 
      url: ''
    }
  ]
},
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }