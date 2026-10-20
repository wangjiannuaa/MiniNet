import {Product} from './product'
export class Bittorrent {
    public bittorrentlogo:string;
    public bittorrentsn:string;
    public bittorrentvalue:number;
    
    constructor(bittorrentlogo:string,
	        bittorrentsn:string,
		bittorrentvalue:number){
	
	this.bittorrentlogo=bittorrentlogo;
	this.bittorrentsn=bittorrentsn;
	this.bittorrentvalue=bittorrentvalue;
    }

    HereUseDollar(){return false;}
    HereUseRMB(){return true;}

    BitcoinofA(prod:Product){}
}
