import { Component,Input,ElementRef,ContentChild,AfterContentInit} from '@angular/core';
export enum EABI{
    genom="genom",
    neuro="neuron",
    base ="base",
    net  ="net",
    cart ="cart",
    order ="order",
    ledger = "ledger",
    ticket = "ticket",
    issue= "issue",
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
    @Input() message!:string;
    constructor(){}
    
    ngAfterContentInit(){
	//console.log(this.projectionRef);//widget self-control自控
    }

}
