import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule }   from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {Library, library} from '@fortawesome/fontawesome-svg-core';
import { SliderComponent } from './components/slider/slider.component';
import { HomeNewsComponent } from './components/home-news/home-news.component';
import { AllNewsComponent } from './components/all-news/all-news.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HelpedComponent } from './components/helped/helped.component';
import {NgDynamicBreadcrumbModule} from "ng-dynamic-breadcrumb";
import {NgxPaginationModule} from 'ngx-pagination';
import { SinglepageComponent } from './components/singlepage/singlepage.component'; // <-- import the module

library.add(fas);
library.add(fab);


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SliderComponent,
    HomeNewsComponent,
    AllNewsComponent,
    HomepageComponent,
    HelpedComponent,
    SinglepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    FontAwesomeModule,
    NgDynamicBreadcrumbModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
