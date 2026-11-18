import { Service } from '@angular/core';






@Service()
export class Aspectofview {
    private _layoutpageheight:number=600;
    private _layoutpagewidth:number=1300;
    private _layoutpagecapacity:number=5; 
    constructor(){}
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
