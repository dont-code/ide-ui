import { Component, Host, Input, OnInit } from '@angular/core';
import { MarginService } from '../margin.service';

@Component({
  selector: 'ide-ui-sub-text-element',
  templateUrl: './sub-text-element.component.html',
  styleUrls: ['./sub-text-element.component.css']
})
export class SubTextElementComponent implements OnInit {
  @Input()
  elementId: string;

  @Input()
  text: string;

  @Input()
  start: boolean;

  value:number;

  constructor(protected margin: MarginService) { }

  ngOnInit(): void {
  }

  updateMargin () {
    if( this.start) {
      this.value=this.margin.value();
    }
    this.margin.change(this.start);
    if( !this.start) {
      this.value=this.margin.value();
    }
  }
}
