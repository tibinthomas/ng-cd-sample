import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todayBirthDay = ['Arjitn', 'Isvan', 'Deepika'];
  todayBirthDay$ = new BehaviorSubject(['Arjitn', 'Isvan', 'Deepika']);

  addNames(dudes) {
    // this.todayBirthDay.push(dudes);
    this.todayBirthDay$.next(dudes);
    this.todayBirthDay.push(dudes);
  }
}
