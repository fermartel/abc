import {
  Directive,
  HostBinding,
  Input,
  OnDestroy
} from '@angular/core';

@Directive({
  selector: '[blink]'
})
export class BlinkDirective implements OnDestroy {
  @HostBinding('style.visibility') viz = 'visible';
  @Input() public speed = 500;

  private intervalId: number;

  constructor() {
    this.intervalId = window.setInterval(() => {
      this.viz = this.viz === 'visible' ? 'hidden' : 'visible';
    }, this.speed);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}

// The above code shows the direct, browser-centric way to do this.
// There are other ways, such as Observable.interval(), which
// binds to the browser less tightly and is much more composable.
