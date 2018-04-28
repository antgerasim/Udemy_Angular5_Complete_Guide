import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})

export class CockpitComponent implements OnInit {
  //serverElements = [];
  //@Output = listenable from outside
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>(); //() calls the ctor of eventemitter
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ blueprintName: string, serverContent: string }>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({ serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({ blueprintName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value });
  }

  ngOnInit() {
  }

}
