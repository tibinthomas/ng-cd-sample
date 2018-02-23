import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChildComponent implements OnInit {
   @Input() data$: Observable<any>;
   @Input() data: string[] = [];

   // set newData(data) { this._newData =  data; }


   dataFromObs = [];
   newData = [];

  constructor(private cd: ChangeDetectorRef) {
    this.check();
    this.cd.detach();
    setTimeout(() => this.cd.reattach(), 2000);
   }

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
