import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StarterComponent }   from './starter.component';
import { QuestionnaireComponent }      from './questionnaire.component';


const routes: Routes = [
  { path: 'starter',  component: StarterComponent },
  { path: 'questionnaire', component: QuestionnaireComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}