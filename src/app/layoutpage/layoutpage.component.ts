import {Component, Input,viewChild} from '@angular/core';
import {MXwidgetComponent } from '../mxwidget/mxwidget.component';

@Component({ 
  selector: 'bw-layoutpage',
    standalone: false,
    host:{'[style.--layoutpageheight]':'layoutpageht',
	  '[style.--layoutpagewidth]':'layoutpagewh'},
    styles:[`.layoutpage{display: block;
              height:var(--layoutpageheight);
              width:var(--layoutpagewidth)}`],
    styleUrl: './layoutpage.component.scss',
    templateUrl: './layoutpage.component.html',
})
export class LayoutpageComponent {
    @Input() layoutpage!:any;
    
    layoutpageheight:number=50*10;
    layoutpagewidth:number=1100;
    constructor(){}
    get layoutpageht(){return this.layoutpageheight.toString()+"px"; }
    get layoutpagewh(){return this.layoutpagewidth.toString()+"px";}

}
