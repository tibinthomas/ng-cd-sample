import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
   @Input() data$: Observable<any>;
   @Input() data: string[] = [];

   // set newData(data) { this._newData =  data; }


   dataFromObs = [];
   newData = [];

  constructor(private cd: ChangeDetectorRef) { this.check(); }

  check() {
    // debugger;
    this.newData = [...this.data];
  }

  checkForChanges() {
    this.cd.detectChanges();
  }

  ngOnInit() {
    this.data$.subscribe(name => { this.dataFromObs = [...this.dataFromObs, ...name]; this.cd.markForCheck(); });
  }

}
