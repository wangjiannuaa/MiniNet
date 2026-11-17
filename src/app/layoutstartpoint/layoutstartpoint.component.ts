import { Component,inject,Service,OnInit,ViewChild,ViewContainerRef,ComponentRef,AfterContentInit} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LayoutpagecubeComponent } from '../layoutpagecube/layoutpagecube.component';
@Service()
export class MessageProcessor {
    pagerize(messagelist:any):any{
	
    }
}

@Component({
  selector: 'bw-layoutstartpoint',
  standalone: false,
  styleUrl: './layoutstartpoint.component.scss',
  templateUrl: './layoutstartpoint.component.html',
})
export class LayoutstartpointComponent implements OnInit {
    messagepro=inject(MessageProcessor);
    messagehistory!:any;
    messagesearchresult!:any;
    @ViewChild('pcchild2',{read: ViewContainerRef}) containerref!: ViewContainerRef;
    pagecubecomponentref!:ComponentRef<LayoutpagecubeComponent>;
    
    ngOnInit() {
	this.http.get<any>(`/api/manager:messagehistory`).subscribe((res)=> {this.messagehistory=res.messagehistory;});
    }
    constructor(private http:HttpClient){}
    ngAfterContentInit(){
    }
    showmessage(event: Event):void{
	let intstructiontext= (event.target as HTMLInputElement).value;

	

	this.pagecubecomponentref=this.containerref.createComponent(LayoutpagecubeComponent);

	let layoutpagecubetestdata1=  [[[{message:1},{message:2}],
[{message:3},{message:4}]],[[{message:5},{message:6}],[{message:7},{message:8}]]]

	let layoutpagecubetestdata2=  [{message:1},{message:2},{message:3},
				       {message:4},{message:5},{message:6},{message:7},{message:8},
				       {message:4},{message:5},{message:6},{message:7},{message:8},
				       {message:4},{message:5},{message:6},{message:7},{message:8},
				       {message:4},{message:5},{message:6},{message:7},{message:8},
				       {message:4},{message:5},{message:6},{message:7},{message:8}
				       
				       
				      ];
	
	this.pagecubecomponentref.setInput('layoutpagecube',this.messagepro.pagerize(layoutpagecubetestdata2));
	
	
    }
}
