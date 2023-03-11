import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-crud-app';
  Count= 0;
 
  increment() {
    this.Count++;
  }
  decrement() {
    this.Count--;
}
}
