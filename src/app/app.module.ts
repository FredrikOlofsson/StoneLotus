import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ControllboxComponent } from './controllbox/controllbox.component';
import { SliderComponent } from './controllbox/slider/slider.component';

@NgModule({
  declarations: [    
    AppComponent,
    ControllboxComponent,
    SliderComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
