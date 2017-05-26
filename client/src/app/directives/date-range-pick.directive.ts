import { Directive, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

// Still can recognize jQuery even after bundle
declare var jQuery: any;


// Directive decorator
@Directive({
  selector: '[appDateRangePick]'
})
// Directive class
export class DateRangePickDirective implements OnInit {

  // Add input property to DateRangePickDirective called options:
  @Input() options: Object = {};
  // Add output property to DateRangePickDirective called selected:
  @Output() selected: any = new EventEmitter();
  birthday = moment();

  constructor(private el: ElementRef) { }

  ngOnInit() {
    // the api from date range picker
    // console.log(this.el.nativeElement); // debug
    jQuery(this.el.nativeElement).daterangepicker(this.options, this.dateCallback.bind(this));
  }

  dateCallback(start, end, label) {
    this.birthday = start.format('YYYY-MM-DD');
    this.selected.emit(this.birthday);
  }
}
