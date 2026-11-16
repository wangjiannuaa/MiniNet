import { Component,OnInit,ContentChild,AfterContentInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LayoutpageComponent } from '../layoutpage/layoutpage.component';
import { LayoutpagecubeComponent } from './layoutpagecube/layoutpagecube.component';

@Component({
  selector: 'bw-layoutstartpoint',
  standalone: false,
  styleUrl: './layoutstartpoint.component.scss',
  templateUrl: './layoutstartpoint.component.html',
})

export class LayoutstartpointComponent implements OnInit {
    messagehistory:any[]=[];
    messagesearchresult:any[]=[];
    @ContentChild('pcchild2') pagecubecomponent!:LayoutpagecubeComponent;
    
    ngOnInit() {

	this.http.get<any>(`/api/manager:messagehistory`).subscribe((res)=> {this.messagehistory=res.messagehistory;});
	
    }
    constructor(private http:HttpClient){}
    ngAfterContentInit(){
	console.log(this.pagecubecomponent);
    }
    showmessage(event: Event):void{
	let intstructiontext= (event.target as HTMLInputElement).value;

	let messagehistorysize=200;
	
	
	
    }
}
