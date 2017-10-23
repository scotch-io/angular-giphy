import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>

    <p>
      app Works!
    </p>

    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
