import { Component,OnInit,Input, ElementRef,ViewChild,AfterViewInit } from '@angular/core';
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
    templateUrl: './repl.component.html'
})


export class REPLComponent implements OnInit,AfterViewInit {

    private  REPLSyntax:string ="";
 
    ngOnInit() {

	this.http.get<any>(`/api/repl:syntax`).subscribe((res)=> {this.REPLSyntax=JSON.stringify(res);});
	
    }
    constructor(private http:HttpClient,private REPLInputElement:ElementRef){
	
    }

    main(event: Event):void{
	console.log(`The user pressed: ${event.target}.value`);


    }
    keyuphandler(event: Event):void{
	console.log(`The user pressed: ${event}.key`);
	
    }

    ngAfterViewInit(){
	this.networkhandler();
    }
    networkhandler():void{

	this.REPLInputElement.nativeElement.querySelector('#IDREPLInput').value=this.REPLSyntax;
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
