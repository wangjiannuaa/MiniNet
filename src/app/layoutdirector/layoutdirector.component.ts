import { Component,signal,AfterContentInit,AfterContentChecked,AfterViewInit,ViewContainerRef,ComponentRef,ViewChild,ViewEncapsulation,Input,AfterViewChecked,inject,OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PageEvent, MatPaginatorModule} from '@angular/material/paginator';
import { LayoutpagegroupComponent } from '../layoutpagegroup/layoutpagegroup.component';
import { Aspectofview } from '../aspectofview.llm';
@Component({
    selector: 'bw-layoutdirector',
    standalone: false,
    host:{'[style.--downwardtop]':'downwardtop','[style.--downwardleft]':'downwardleft',
	  '[style.--upwardtop]':'upwardtop','[style.--upwardleft]':'upwardleft'
	 },
    styles:[`.layoutdirectorbuttonup{
top:var(--upwardtop);
left:var(--upwardleft);
width:50;
height:50;
}
.layoutdirectorbuttondown{
top:var(--downwardtop);
left:var(--downwardleft);
width:50;
height:50;
}
`],
    
    styleUrl: './layoutdirector.component.scss',
    templateUrl: './layoutdirector.component.html',
    encapsulation:ViewEncapsulation.Emulated,
})


export class LayoutdirectorComponent {
    @Input() layoutpagecube!:any;
    public aview = inject(Aspectofview);
    layoutpagecubeed:any=[];
    @ViewChild('pcChild5',{read:ViewContainerRef}) containerref!:ViewContainerRef;
    layoutpagegroupcomponentref!:ComponentRef<LayoutpagegroupComponent>;
    pageSize = signal(0);hidePageSize = signal(false);
    showPageSizeOptions = signal(true);
    pageSizeOptions = signal([1,2,3,4,5]);
    pageIndex = signal(0);
    length = signal(50);
    showFirstLastButtons = signal(true);
    disabled = signal(false);
    pageEvent = signal<PageEvent | undefined>(undefined);
    isnotfirstpage:boolean=false;
    isnotlastpage:boolean=true;

    get downwardleft(){return window.innerWidth/2.0+"px"; }
    get downwardtop(){return 0+"px";}
    get upwardleft(){return window.innerWidth/2.0+"px"; }
    get upwardtop(){return window.innerHeight-50+"px";}    

    handlePageEvent(e: PageEvent) {
	this.pageEvent.set(e);
	this.length.set(e.length);
	let oldpagesize=this.pageSize();
	this.pageSize.set(e.pageSize);
	let oldpageindex=this.pageIndex();
	this.pageIndex.set(e.pageIndex);


	if(oldpagesize != this.pageSize()){
	this.aview.LAYOUTPAGECAPACITY=this.pageSize();
	this.layoutpagecubeed =this.pagerize(this.layoutpagecube);
	this.layoutpagegroupcomponentref.setInput('layoutpagegroup',
						  this.layoutpagecubeed[this.pageIndex()]);
	}

	if(oldpageindex != this.pageIndex() && oldpagesize == this.pageSize()){
	    	this.layoutpagegroupcomponentref.setInput('layoutpagegroup',
							  this.layoutpagecubeed[this.pageIndex()]);
	}

	

	
    }

    setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions.set(setPageSizeOptionsInput.split(',').map(str => +str));
    }
    }

    constructor(){}
    ngOnInit():void{

    }
    ngAfterContentInit():void{


	this.layoutpagecubeed =this.pagerize(this.layoutpagecube);
	this.pageSize.set(this.aview.LAYOUTPAGECAPACITY*this.aview.LAYOUTPAGEGROUPQUOTE);
	this.length.set(this.layoutpagecube.length);
        this.pageIndex.set(0);
	this.pageSizeOptions.set([1,2,3,4,5]);
    }
    ngAfterContentChecked():void{

    }

    ngAfterViewInit():void{
	this.layoutpagegroupcomponentref=this.containerref.createComponent(LayoutpagegroupComponent);
	this.layoutpagegroupcomponentref.setInput('layoutpagegroup',
						  this.layoutpagecubeed[this.pageIndex()]);
    }
    ngAfterViewChecked():void{




    }

    pagerize(messagelist:any):any{

        let pagecapacity:number=this.aview.LAYOUTPAGECAPACITY;
	let pagegroupquote:number=this.aview.LAYOUTPAGEGROUPQUOTE;
	
	let page:any=[];//cab
	let data:any=[];//aim building
	let pagegroup:any=[];//train

	(messagelist as []).forEach(function(item:{},index:number){
       
	

	    let wherepage:number = index%(pagecapacity);//0--pagecapacity
	    let whatpage:number = Math.floor(index/pagecapacity);
		    whatpage = whatpage%pagegroupquote;//0--pagegroupquote
	    let whatgroup:number = Math.floor(index/pagecapacity);
	    whatgroup = Math.floor(whatgroup/pagegroupquote);
		
		page.splice(wherepage,0,item);

	    if((wherepage == (pagecapacity-1) && page.length == pagecapacity) || (index+1) == messagelist.length )//full or null
		{pagegroup.splice(whatpage,0,page);page=[];}
	    if((whatpage == (pagegroupquote-1) && pagegroup.length == pagegroupquote) || (index+1) == messagelist.length )
		{data.splice(whatgroup,0,pagegroup);pagegroup=[];}
	
	    });
		    console.log("dt",data); return data;
      }
    
}
