import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoronaComponent } from './corona/corona.component';
import { CoronacasesComponent } from './coronacases/coronacases.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';


const myroutes=[

  {path:"",component:CoronaComponent},
  {path:"case",component:CoronacasesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CoronaComponent,
    CoronacasesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      RouterModule.forRoot(myroutes),
      HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
