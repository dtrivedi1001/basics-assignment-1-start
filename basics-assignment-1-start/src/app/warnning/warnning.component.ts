import {Component } from '@angular/core';

@Component({
  selector: 'app-warning',
  template: `
  <p> This is warning, you are in great danger!</p>
  `,
  styles:[
    `
    p{
      padding: 40px;
      background-color: mistyrose;
      border: 1px solid red;
    }
    `
  ]
})
export  class WarningComponent {
}
