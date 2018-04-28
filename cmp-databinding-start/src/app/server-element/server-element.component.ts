import { element } from 'protractor';
import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Default - component get styles from its component.css
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {

  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(chnages: SimpleChanges) {
    console.log('ngOnChanged called');
    console.log(chnages);
  }


  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngDoCheck(): void {
    console.log('ngDocheckcalled');
  }

  ngAfterContentInit(): void {

  }
  ngAfterContentChecked(): void {

  }


}
