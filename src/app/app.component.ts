import { Component, signal } from '@angular/core';



@Component({
  selector: 'bw-root',
  standalone: false,
  styleUrl: './app.component.css',
    templateUrl: './app.component.html'


    
})
export class App {
    protected readonly title = signal('王太坊');
}
