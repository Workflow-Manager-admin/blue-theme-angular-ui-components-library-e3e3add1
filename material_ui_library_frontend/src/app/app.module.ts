import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

// Use local project path for the library module
/* build fix: temporarily remove MaterialBlueLibModule import
import { MaterialBlueLibModule } from '../../projects/material-blue-lib/src/public-api';
*/

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([]),
    // MaterialBlueLibModule,
    AppComponent // Standalone root import
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
