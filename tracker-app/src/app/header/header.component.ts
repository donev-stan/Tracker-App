import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, delay, map, of } from 'rxjs';
import { Icons } from 'src/config/icons.enum';
import { Pages } from 'src/config/pages.enum';

const myAnimation = trigger('myAnim', [
  transition('* => *', [
    animate(
      '2s',
      keyframes([
        style({
          easing: 'ease-out',
          transform: 'scale(1)',
          transformOrigin: 'center center',
          offset: 0,
        }),
        style({ easing: 'ease-in', transform: 'scale(0.91)', offset: 0.1 }),
        style({ easing: 'ease-out', transform: 'scale(0.98)', offset: 0.17 }),
        style({ easing: 'ease-in', transform: 'scale(0.87)', offset: 0.33 }),
        style({ easing: 'ease-out', transform: 'scale(1)', offset: 0.45 }),
      ])
    ),
  ]),
]);

@Component({
  selector: 'tracker-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [myAnimation],
})
export class HeaderComponent {
  readonly icons = Icons;
  readonly pages = Pages;

  runAnimation$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(private router: Router) {
    this.runAnimation$
      .asObservable()
      .pipe(
        delay(300),
        map((_) => false)
      )
      .subscribe((shouldRunAnimation: boolean) => {
        // Handle the value emitted after the delay and mapping
        // This value will be false after a delay of 300ms
      });
  }

  navigateTo(page: string): void {
    this.runAnimation$.next(false);

    console.log('Asdasdas');

    this.router.navigate([page]);
    this.runAnimation$.next(true);
  }
}
