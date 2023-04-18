import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstContainerComponent } from './first-container/first-container.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ForecastComponent } from './forecast/forecast.component';
import { MadridComponent } from './madrid/madrid.component';
import { AirconditionComponent } from './aircondition/aircondition.component';
import { DayforecastComponent } from './dayforecast/dayforecast.component';
import { RouterModule, ROUTES } from '@angular/router';
import { WeatherserService } from './services/weatherser.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstContainerComponent,
    LandingpageComponent,
    SearchbarComponent,
    SidebarComponent,
    ForecastComponent,
    MadridComponent,
    AirconditionComponent,
    DayforecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [WeatherserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
