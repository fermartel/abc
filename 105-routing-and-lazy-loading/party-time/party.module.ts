import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { PartyTimeSearchComponent } from './party-time-search.component';

const partyRoutes: Routes = [
  { path: '', component: PartyTimeSearchComponent }
];

@NgModule({
  declarations: [PartyTimeSearchComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(partyRoutes)
  ] // import MODULES
})
export class PartyModule {}
