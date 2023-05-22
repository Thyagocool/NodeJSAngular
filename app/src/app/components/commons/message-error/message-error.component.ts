import { Component, Input } from '@angular/core';

@Component({
  selector: 'message-error',
  templateUrl: './message-error.component.html',
  styleUrls: ['./message-error.component.scss']
})
export class MessageErrorComponent {
  @Input() errorDescription: string = ''
}
