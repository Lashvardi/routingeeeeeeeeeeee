import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeGeoComponent } from './home-geo/home-geo.component';
import { HomeEngComponent } from './home-eng/home-eng.component';
import { ErrorComponent } from './error/error.component';
import { DetailsComponent } from './details/details.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeGeoComponent,
    HomeEngComponent,
    ErrorComponent,
    DetailsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
