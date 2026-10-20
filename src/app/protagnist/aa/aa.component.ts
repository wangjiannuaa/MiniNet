import { Component , OnInit} from '@angular/core';
import { Bittorrent } from '../model/bittorrent';
@Component({
  selector: 'bw-aa',
  standalone: false,
  styleUrl: './aa.component.css',
  templateUrl: './aa.component.html',
})
export class AAComponent implements OnInit {
    public bttt:Bittorrent;
    public btttvalueclass = {};
    constructor(){
	this.bttt = new Bittorrent("AlcoholicsAnonymous","1",1.0);
    }
    ngOnInit(){
	this.btttvalueclass={
	    "dollar":this.bttt.HereUseDollar(),
	    "RMB":this.bttt.HereUseRMB()
	};
    }
}
