import { Component,OnInit} from '@angular/core';
import { MatCardHarness } from '@angular/material/card/testing';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'bw-repl',
  standalone: false,
  styleUrl: './repl.component.css',
  templateUrl: './repl.component.html',
})



export class REPLComponent implements OnInit {
    private needsomething:string="";

    ngOnInit() {
    }
    constructor(){}

    main(event: KeyboardEvent):void{
	
	console.log(this.needsomething);
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
