import { Injectable } from '@angular/core';

@Injectable()
export class ToolboxService {

  tools: any;

  constructor() {
    this.tools = {
      title: '',
      actions: []
    };
  }

  setToolBox(toolbox: any) {
    this.tools = toolbox;
  }

  getToolBox() {
    return this.tools;
  }

}
