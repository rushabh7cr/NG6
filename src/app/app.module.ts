import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.model';
import { HttpClientModule} from '@angular/common/http';
//import { ResultComponent } from './result/result.component'

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
    //ResultComponent
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
