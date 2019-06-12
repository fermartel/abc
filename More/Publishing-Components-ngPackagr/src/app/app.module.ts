import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CopyrightComponent } from './copyright/copyright.component';
import { CopyrightModule } from './copyright/copyright.module';

@NgModule({
  imports: [BrowserModule, CopyrightModule],
  entryComponents: [CopyrightComponent]
})
export class AppModule {
  constructor() {}
}
