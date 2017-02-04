import { Injectable } from '@angular/core';

@Injectable()
export class ToolboxService {

  tools: any;

  constructor() {
    this.tools = {
      title: '',
      actions: [],
      more: []
    };
  }

  setToolBox(toolbox: any) {
    this.tools = toolbox;
  }

  getToolBox() {
    return this.tools;
  }

}
