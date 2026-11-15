import { Component, signal,AfterViewInit,AfterViewChecked,ElementRef,ViewChild,ComponentRef} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Aspectofview } from './aspectofview.llm';
import { LayoutpagegroupComponent } from './layoutpagegroup/layoutpagegroup.component'
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

    @ViewChild('pcchild')layoutpagegroup!:ComponentRef<LayoutpagegroupComponent>;
    
    constructor(private aspectofview:Aspectofview){
	
    }

    ngAfterViewInit(){
	//	this.outerdiv.nativeElement.focus();

    }
    ngAfterViewChecked(){
//	window.alert(this.layoutpagegroup.pagegroupnum);
    }
}
