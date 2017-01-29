import { Component, Input } from '@angular/core';

export interface Tool {
  text?: string;
  tooltip?: string;
  icon: string;
  callback?: Function;
}

export interface Toolbox {
  title?: string;
  actions: Tool[];
  more?: Tool[];
}

@Component({
  selector: 'tq-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent {

  @Input() tools: Toolbox;

  constructor() {  
  }

}