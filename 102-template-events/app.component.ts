import { Component } from '@angular/core';

import { scheduleMap } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  top = 500;
  left = 500;
  name = 'John Doe';
  message = 'Please Clock In';
  currentSchedule = 'Hover to see selected work times';

  clockIn(event: MouseEvent) {
    if (event.shiftKey) {
      this.message = 'Clocked in as manager!';
    } else {
      this.message = 'Clocked in as employee';
    }
  }

  clockOut() {
    this.message = 'Have a nice day!';
  }

  showSchedule(day: string) {
    this.currentSchedule = scheduleMap[day];
  }

  clearSchedule() {
    this.currentSchedule = 'Hover to see selected work times';
  }

  iAlwaysMove() {
    console.log(1);
    this.top =
      Math.floor(Math.random() * (window.innerHeight - 100)) + 10;
    this.left =
      Math.floor(Math.random() * (window.innerWidth - 100)) + 10;
  }
}
