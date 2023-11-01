import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
