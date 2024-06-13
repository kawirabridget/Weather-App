import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { weatherData } from './models/weather.model';




@NgModule({
    declarations: [
        AppComponent,
        // Declare other components here
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
  
    ],
    providers: [],
    bootstrap: [AppComponent] // Ensure the app starts with AppComponent
})
export class AppModule { }
