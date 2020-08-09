import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { VideoComponent } from './components/video/video.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app.RoutingModule';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot([]),AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
