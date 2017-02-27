import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { DiretivaNgifModule} from './diretiva-ngif/diretiva-ngif.module';
import { TesteComponent } from './teste/teste.component';


@NgModule({
  declarations: [
    AppComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DiretivaNgifModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
