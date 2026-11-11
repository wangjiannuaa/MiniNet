import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'bw-root',
  standalone: false,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html'



})
export class App {
    protected readonly title = signal('王太坊');
    protected isLoggedin = false;

}
