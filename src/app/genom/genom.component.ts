import { Component,Input } from '@angular/core';

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
   @Input() message!:any;
    genomheight:number=50;
	genomwidth:number=1100;
 
    get genomht(){return this.genomheight.toString()+"px"; }
    get genomwh(){return this.genomwidth.toString()+"px";}
}
