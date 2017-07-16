import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule} from '@angular/material';
import { StarterComponent} from './starter.component';
import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { QuestionnaireComponent} from './questionnaire.component'
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    QuestionnaireComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
