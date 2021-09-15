import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

  public technologies: string[];
  public counter: number = 0;

  constructor() {
    this.technologies = [
      'HTML',
      'CSS',
      'JavaScript'
    ];

    setInterval(() => {
      if (this.counter === this.technologies.length - 1) {
        this.counter = 0;
      } else {
        this.counter++;
      }
    }, 2000);
  }

}
