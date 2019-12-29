import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WarningComponent } from './warnning/warnning.component';
import { SuccessComponent } from './success/success.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    WarningComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
