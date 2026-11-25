import { Component,Input,inject,ComponentRef,ViewContainerRef,ViewChild,ElementRef,Renderer2 } from '@angular/core';
import { Aspectofview } from '../aspectofview.llm';
import { SVGComponent } from '../svg/svg.component';

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

    
    constructor(private renderer: Renderer2){
	this.genomheight=Math.floor(this.aview.LAYOUTPAGEHEIGHT/this.aview.LAYOUTPAGECAPACITY);
        this.genomwidth=this.aview.LAYOUTPAGEWIDTH;
    }
 
    get genomht(){return this.genomheight.toString()+"px"; }
    get genomwh(){return this.genomwidth.toString()+"px";}

    OnGenom(){//runtime container invokepoint in mininet role
	//vs microsoft dipatcher net macro, here is concise
	this.svgcomponentref=this.containerref.createComponent(SVGComponent);
	const messageleveltext=this.renderer.createText(this.message.level);
	const messagelevelnode=this.renderer.createElement('h2');
	this.renderer.appendChild(messagelevelnode,messageleveltext);
	
	this.renderer.appendChild(this.svgcomponentref.location.nativeElement,messagelevelnode);
	let svgNS="http://www.w3.org/2000/svg";
	const messageabouthtmlnode=this.renderer.createElement(this.message.about.html.element,svgNS);
	

	let thisrenderer = this.renderer;
	this.message.about.html.attributes.forEach(function(item:[string,string],index:number){//bigendian also called controlling inversion
	   thisrenderer.setAttribute(messageabouthtmlnode,item[0],item[1]);

	});
	this.message.about.styles.forEach(function(item:[string,string],index:number){//bigendian also called controlling inversion
	   thisrenderer.setStyle(messageabouthtmlnode,item[0],item[1]);

	});
	
	
	this.renderer.appendChild(this.svgcomponentref.location.nativeElement.firstChild,messageabouthtmlnode);

//	this.svgcomponentref.setInput('innerHTML',  '<polyline  fill=\"none\" stroke=\"#0074d9\" stroke-width=\"3\" points=\"0,120 20,60 40,80 60,20\"/>');

    }
    OffGenom(){//runtime container invokepoint in mininet role
	//vs microsoft dipatcher net macro, here is concise
	this.svgcomponentref?.destroy();
	//	this.svgcomponentref.setInput('innerHTML',);

    }
    PlayGenom(){}
    PauseGenom(){}
}
