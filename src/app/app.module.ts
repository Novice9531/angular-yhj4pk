import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { enableRipple } from '@syncfusion/ej2-base';

@NgModule({
  imports: [
    BrowserModule,
    
    CommonModule,
    FormsModule,
    
  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    TopBarComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/