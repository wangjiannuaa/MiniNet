import { Service } from '@angular/core';
//集中式系统，与分布式系统之区别在此的意义就是前者具有计划，每一次变化都是以设定停止条件为依据的。
//后者以元素出生在某地，学习在某地，工作在某地的动态发展过程，没有绝对的停止条件。





@Service()
export class Aspectofview {
    private _layoutpageheight:number=600;
    private _layoutpagewidth:number=1100;
    private _layoutpagecapacity:number=10;
    private _layoutpagegroupquote:number=1;
    constructor(){}
    public get LAYOUTPAGEGROUPQUOTE() {
    return this._layoutpagegroupquote;
    }
        public set LAYOUTPAGEGROUPQUOTE(theLAYOUTPAGEGROUPQUOTE: number) {
	if (theLAYOUTPAGEGROUPQUOTE <= 0 || theLAYOUTPAGEGROUPQUOTE >= 4) {
	    throw new Error('The LAYOUTPAGEGROUPQUOTE is invalid');
	}
	this._layoutpagegroupquote = theLAYOUTPAGEGROUPQUOTE;
	}

    
    public get LAYOUTPAGEWIDTH() {
    return this._layoutpagewidth;
    }
    public get LAYOUTPAGECAPACITY() {
    return this._layoutpagecapacity;
    }
    public get LAYOUTPAGEHEIGHT() {
    return this._layoutpageheight;
    }

    public set LAYOUTPAGEHEIGHT(theLAYOUTPAGEHEIGHT: number) {
	if (theLAYOUTPAGEHEIGHT <= 20 || theLAYOUTPAGEHEIGHT >= 200) {
	    throw new Error('The LAYOUTPAGEHEIGHT is invalid');
	}
	this._layoutpageheight = theLAYOUTPAGEHEIGHT;
    }
    public set LAYOUTPAGECAPACITY(theLAYOUTPAGECAPACITY: number) {
	if (theLAYOUTPAGECAPACITY <= 0 || theLAYOUTPAGECAPACITY >= 20) {
	    throw new Error('The LAYOUTPAGEHEIGHT is invalid');
	}
	this._layoutpagecapacity = theLAYOUTPAGECAPACITY;
    }
      public set LAYOUTPAGEWIDTH(theLAYOUTPAGEWIDTH: number) {
	if (theLAYOUTPAGEWIDTH <= 700 || theLAYOUTPAGEWIDTH >= 1500) {
	    throw new Error('The theLAYOUTPAGEWIDTH is invalid');
	}
	this._layoutpagewidth = theLAYOUTPAGEWIDTH;
    }
    

}
