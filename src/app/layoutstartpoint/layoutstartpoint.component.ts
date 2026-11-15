import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'bw-layoutstartpoint',
  standalone: false,
  styleUrl: './layoutstartpoint.component.scss',
  templateUrl: './layoutstartpoint.component.html',
})
export class LayoutstartpointComponent {

    constructor(){}
    showmessage(event: Event):void{
	let intstructiontext= (event.target as HTMLInputElement).value;

    
    }
}
