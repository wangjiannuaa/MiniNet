import { Component,ElementRef,ContentChild,AfterContentInit} from '@angular/core';
export enum EABI{
    genom="genom",
    neuro="neuron",
    base ="base",
    net  ="net",
    cart ="cart",
}

@Component({
  selector: 'bw-mxwidget',
  standalone: false,
  styleUrl: './mxwidget.component.scss',
  templateUrl: './mxwidget.component.html',
})
export class MXwidgetComponent {
    @ContentChild('projection')projectionRef!:ElementRef;
    essentialabi:EABI=EABI.genom;
    constructor(){}
    
    ngAfterContentInit(){
	console.log(this.projectionRef);//widget self-control自控
    }

}
