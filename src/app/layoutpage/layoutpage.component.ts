import {Component, Input,viewChild} from '@angular/core';
import {MXwidgetComponent } from '../mxwidget/mxwidget.component';


@Component({ 
  selector: 'bw-layoutpage',
  standalone: false,
  styleUrl: './layoutpage.component.scss',
  templateUrl: './layoutpage.component.html',
})
export class LayoutpageComponent {
    @Input() layoutpage!:any;

	constructor(){}
    widgethandler(){
	console.log("in page");
    }
}
