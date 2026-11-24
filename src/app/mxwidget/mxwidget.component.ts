import { Component,Input,ElementRef,ContentChild,AfterContentInit} from '@angular/core';
import { EABI } from '../eabi.message';

@Component({
  selector: 'bw-mxwidget',
  standalone: false,
  styleUrl: './mxwidget.component.scss',
  templateUrl: './mxwidget.component.html',
})
export class MXwidgetComponent {
    @ContentChild('projection')projectionRef!:ElementRef;
    essentialabi:EABI=EABI.genom;
    @Input() message!:string;
    constructor(){}
    
    ngAfterContentInit(){
	//console.log(this.projectionRef);//widget self-control自控
    }

}
