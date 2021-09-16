import { Component } from '@angular/core';
import { CircularArray } from './circular-array';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

  public technologies: CircularArray<string>;
  public counter: number = 0;

  constructor() {
    this.technologies = new CircularArray<string>([
      'HTML',
      'CSS',
      'JavaScript'
    ]);

    setInterval(() => {
      this.counter++;
    }, 2000);
  }

}
