import { Component, Input } from '@angular/core';

export interface Message {
    severity?: string;
    message?: string;
}

@Component({
  selector: 'tq-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  @Input() value: Message[];

  @Input() closable: boolean = true;

  hasMessages() {
      return this.value && this.value.length > 0;
  }

  getSeverityClass() {
      return this.value[this.value.length-1].severity;
  }

  clear(event) {
      this.value.splice(0, this.value.length);
      event.preventDefault();
  }
    
  get icon(): string {
      let icon: string = null;
      if(this.hasMessages()) {
          let msg = this.value[this.value.length-1];
          switch(msg.severity) {
              case 'success':
                  icon = 'fa-check';
              break;
              
              case 'info':
                  icon = 'fa-info-circle';
              break;
              
              case 'error':
                  icon = 'fa-close';
              break;
              
              case 'warn':
                  icon = 'fa-warning';
              break;
              
              case 'success':
                  icon = 'fa-check';
              break;
              
              default:
                  icon = 'fa-info-circle';
              break;
          }
      }
      
      return icon;
  }

}
