import { Component, signal,AfterViewInit,AfterViewChecked,ElementRef,ViewChild,ComponentRef,ViewContainerRef} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Aspectofview } from './aspectofview.llm';
import { LayoutpagegroupComponent } from './layoutpagegroup/layoutpagegroup.component';
import { LayoutpageComponent} from './layoutpage/layoutpage.component';

@Component({
  selector: 'bw-root',
  standalone: false,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html'



})
export class App implements AfterViewInit,AfterViewChecked{
    protected readonly title = signal('米尼网络');
    protected isLoggedin = false;
    pagegroupnumout:number=1;
    debut:boolean=true;
    
    @ViewChild('pcchild1')layoutpage!:LayoutpageComponent;
    @ViewChild('pcchild2')layoutpagegroup!:LayoutpagegroupComponent;

    
    constructor(private aspectofview:Aspectofview){
	
    }

    ngAfterViewInit(){
	//	this.outerdiv.nativeElement.focus();

    }
    ngAfterViewChecked(){
//	console.error(this.layoutpagegroup.pagegroupnum == 1 );
    }

    bubble(event: Event){
	let intstructiontext= (event.target as HTMLInputElement).value;
	this.debut=false;
	event.preventDefault();
    }
}
