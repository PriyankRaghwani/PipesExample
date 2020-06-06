import { flyingHeroes } from './class/flyingHeroes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PipesComponentComponent } from './pipes-component/pipes-component.component';

import { Pipes } from './class/pipes';
import { FlyingHeroesComponent } from './flying-heroes/flying-heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponentComponent,
    FlyingHeroesComponent,
    Pipes,
    flyingHeroes
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
