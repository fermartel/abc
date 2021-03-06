import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { employeeReducer } from './employees.state';
import { EmployeeListComponent } from './notification-manager/employee-list/employee-list.component';
import { NotificationManagerComponent } from './notification-manager/notification-manager.component';
import { PositionListComponent } from './notification-manager/position-list/position-list.component';
import { positionReducer } from './positions.state';
import { SharedModule } from './shared-module/shared.module';
import { AppState } from './state';

@NgModule({
  declarations: [
    AppComponent,
    NotificationManagerComponent,
    EmployeeListComponent,
    PositionListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot<AppState>({
      positions: positionReducer,
      employees: employeeReducer
    }),
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
