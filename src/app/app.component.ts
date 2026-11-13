import { Component, signal,AfterViewInit,AfterViewChecked,ElementRef,ViewChild} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Aspectofview } from './aspectofview.llm';

@Component({
  selector: 'bw-root',
  standalone: false,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html'



})
export class App implements AfterViewInit,AfterViewChecked{
    protected readonly title = signal('米尼网络');
    protected isLoggedin = false;

    @ViewChild('pcAppouterdiv')outerdiv!:ElementRef<HTMLDivElement>;
    
    constructor(private aspectofview:Aspectofview){
	
    }

    ngAfterViewInit(){
	console.log("j");this.outerdiv.nativeElement.focus();
    }
    ngAfterViewChecked(){

    }
}
