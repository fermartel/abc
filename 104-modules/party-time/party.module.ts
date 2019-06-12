import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { PartyTimeSearchComponent } from './party-time-search.component';

@NgModule({
  declarations: [PartyTimeSearchComponent],
  exports: [PartyTimeSearchComponent], // export COMPONENTS, directives, pipes
  imports: [SharedModule, CommonModule] // import MODULES
})
export class PartyModule {}
