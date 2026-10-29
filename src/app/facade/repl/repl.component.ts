import { Component,OnInit,Input,ChangeDetectionStrategy} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class token {
    public value:string="";
    
        constructor(){}
}

export class tokenring {
    public ring:token[];
    
    constructor(length:number){
	this.ring=new Array<token>(length);
    }

}



@Component({
  selector: 'bw-repl',
  standalone: false,
  styleUrl: './repl.component.css',
    templateUrl: './repl.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})


export class REPLComponent implements OnInit {
    private  prompt:string = "coarse";
    @Input()  public REPLInput:string;
    ngOnInit() {
    }
    constructor(private http:HttpClient){
	
	this.REPLInput=this.prompt;
    }

    main(event: Event):void{
	console.log(`The user pressed: ${event.target}.value`);

	let REPLSyntax = {};
	this.http.get<any>(`/api/repl:syntax`).subscribe((res)=> {REPLSyntax=res});
	this.REPLInput=JSON.stringify(REPLSyntax);

	
    }
    keyuphandler(event: Event):void{
	console.log(`The user pressed: ${event}.key`);
	
    }

    networkhandler():void{
	
	
    }
    
}

/*
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { OverlayContainer } from '@angular/cdk/overlay';



@Component({
  selector: 'bw-repl',
  standalone:false,
  templateUrl: 'repl.component.html',
  styleUrls: ['repl.component.css'],
})
export class REPLComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
*/
