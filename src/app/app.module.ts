import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LeadListComponent } from './lead-list/lead-list.component';
import { LeadFormComponent } from './lead-form/lead-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LeadListComponent,
    LeadFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
