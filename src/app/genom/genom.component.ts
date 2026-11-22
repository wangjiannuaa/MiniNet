import { Component,Input,inject } from '@angular/core';
import { Aspectofview } from '../aspectofview.llm';
@Component({
  selector: 'bw-genom',
    standalone: false,
    host:{'[style.--genomheight]':'genomht','[style.--genomwidth]':'genomwh'},
    styles:[`.genom{display: inline-block;
padding-bottom:10px;
height:var(--genomheight);
width:var(--genomwidth)}`],
  styleUrl: './genom.component.scss',
  templateUrl: './genom.component.html',
})
export class GenomComponent {//embeded genom 规律驱动的repository
   public aview = inject(Aspectofview);
   @Input() message!:any;
    genomheight:number;
    genomwidth:number;
    constructor(){
	this.genomheight=Math.floor(this.aview.LAYOUTPAGEHEIGHT/this.aview.LAYOUTPAGECAPACITY);
        this.genomwidth=this.aview.LAYOUTPAGEWIDTH;
    }
 
    get genomht(){return this.genomheight.toString()+"px"; }
    get genomwh(){return this.genomwidth.toString()+"px";}
}
