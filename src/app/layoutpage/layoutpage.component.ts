import {Component, viewChild} from '@angular/core';
import {MXwidgetComponent } from '../mxwidget/mxwidget.component';

export interface widget
{
    color:string;
    text:string;
}



@Component({ 
  selector: 'bw-layoutpage',
  standalone: false,
  styleUrl: './layoutpage.component.scss',
  templateUrl: './layoutpage.component.html',
})
export class LayoutpageComponent {
    protected page:number =1;
    mxwidgetgroup: widget[] = [
    {text: 'One',  color: 'white'},
    {text: 'Two',  color: 'white'},
  ];

	constructor(){}

}
