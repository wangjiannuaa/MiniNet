import { Component,OnInit,ViewChild,ViewContainerRef,ComponentRef,AfterContentInit} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LayoutpagecubeComponent } from '../layoutpagecube/layoutpagecube.component';

@Component({
  selector: 'bw-layoutstartpoint',
  standalone: false,
  styleUrl: './layoutstartpoint.component.scss',
  templateUrl: './layoutstartpoint.component.html',
})

export class LayoutstartpointComponent implements OnInit {
 
    messagehistory!:any;
    messagesearchresult!:any;
    
    ngOnInit() {
	this.http.get<any>(`/api/manager:messagehistory`).subscribe((res)=> {this.messagehistory=res.messagehistory;});
	
    }
    constructor(private http:HttpClient){}
    ngAfterContentInit(){
    }
    showmessage(event: Event):void{
	let intstructiontext= (event.target as HTMLInputElement).value;


	let layoutpagecubetestdata1=  [[[{message:1},{message:2}],
					[{message:3},{message:4}]],[[{message:5},{message:6}],[{message:7}]]];

	let layoutpagecubetestdata2=  [{message:1,level:"freshman",about:{html:{element:'rect',attributes:[['x',"10"],['height',"180"],['y',"10"],['width',"180"],['id',"MyRect"]]},styles:[['stroke', "black"],['fill',"blue"],['paint-order',"stroke"]]}},{message:2},{message:3},{message:4},{message:5},{message:6},{message:7},{message:8},{message:9},{message:10},{message:11},{message:12},{message:13},{message:14},{message:15},{message:16},{message:17},{message:18},{message:19},{message:20},{message:21},{message:22},{message:23},{message:24},{message:25},{message:26},{message:27},{message:28},{message:29},{message:30},{message:31},{message:32},{message:33},{message:34},{message:35},{message:36},{message:37},{message:38}];
//	this.pagecubecomponentref.setInput('layoutpagecube',
//					   layoutpagecubetestdata1);
        this.messagesearchresult=layoutpagecubetestdata2;
	
	
    }
}
//-字号在render.createElement的flags中有说明
