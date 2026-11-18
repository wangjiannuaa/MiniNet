import {Component, Input,viewChild,inject} from '@angular/core';
import {MXwidgetComponent } from '../mxwidget/mxwidget.component';
import { Aspectofview } from '../aspectofview.llm';
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
     public aview = inject(Aspectofview);
     layoutpageheight:number;
     layoutpagewidth:number;
    constructor(){
	this.layoutpageheight=this.aview.LAYOUTPAGEHEIGHT;
        this.layoutpagewidth=this.aview.LAYOUTPAGEWIDTH;}
     get layoutpageht(){return this.layoutpageheight.toString()+"px"; }
     get layoutpagewh(){return this.layoutpagewidth.toString()+"px"; }

}
