import { Component,ElementRef,ContentChild,AfterContentInit} from '@angular/core';

@Component({
  selector: 'bw-mxwidget',
  standalone: false,
  styleUrl: './mxwidget.component.scss',
  templateUrl: './mxwidget.component.html',
})
export class MXwidgetComponent {
    @ContentChild('projection')projectionRef!:ElementRef;
    
    ngAfterContentInit(){
	console.log(this.projectionRef);
    }

}
