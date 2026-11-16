import {Component, Input,viewChild} from '@angular/core';
import {MXwidgetComponent } from '../mxwidget/mxwidget.component';

export interface Message
{

    
}



@Component({ 
  selector: 'bw-layoutpage',
  standalone: false,
  styleUrl: './layoutpage.component.scss',
  templateUrl: './layoutpage.component.html',
})
export class LayoutpageComponent {
    @Input() pagenum!:number;
    @Input() pagesize!:number;
    @Input() layoutpage!: Message[];

	constructor(){}
    widgethandler(){
	console.log("in page");
    }
}
