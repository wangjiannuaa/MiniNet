import { Component,Input,inject,ComponentRef,ViewContainerRef,ViewChild } from '@angular/core';
import { Aspectofview } from '../aspectofview.llm';
import { SVGComponent } from '../svg/svg.component'
@Component({
  selector: 'bw-genom',
    standalone: false,
    host:{'[style.--genomheight]':'genomht','[style.--genomwidth]':'genomwh'},
    styles:[`.genom{display: block;
height:var(--genomheight);
width:var(--genomwidth)} .genom::before{content:"🧬"}`],
  styleUrl: './genom.component.scss',
  templateUrl: './genom.component.html',
})
export class GenomComponent {//embeded genom 规律驱动的repository
    public aview = inject(Aspectofview);
   @Input() message!:any;
    genomheight:number;
    genomwidth:number;

    @ViewChild('pcChild6',{read:ViewContainerRef}) containerref!:ViewContainerRef;
    svgcomponentref!:ComponentRef<SVGComponent>;

    
    constructor(){
	this.genomheight=Math.floor(this.aview.LAYOUTPAGEHEIGHT/this.aview.LAYOUTPAGECAPACITY);
        this.genomwidth=this.aview.LAYOUTPAGEWIDTH;
    }
 
    get genomht(){return this.genomheight.toString()+"px"; }
    get genomwh(){return this.genomwidth.toString()+"px";}

    OnGenom(){//runtime container invokepoint in mininet role
	//vs microsoft dipatcher net macro, here is concise
	this.svgcomponentref=this.containerref.createComponent(SVGComponent);
	//	this.svgcomponentref.setInput('innerHTML',);						  );

    }
    
}
