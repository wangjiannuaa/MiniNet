import { Component,AfterViewInit,ElementRef,ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


enum PAGEDIRCONTROL{
  UP,
  DOWN
}
@Component({
  selector: 'bw-layoutdirector',
  standalone: false,
  styleUrl: './layoutdirector.component.scss',
  templateUrl: './layoutdirector.component.html',
})


export class LayoutdirectorComponent {
  public  grouppagelen:number=2;
  public  grouppagenum:number=1;
//  public  grouppagedircontrol:PAGEDIRCONTROL=PAGEDIRCONTROL.UP;


  constructor(){}
  pagegroupupwards(){
    this.grouppagenum++;
  }
  pagegroupdownwards(){
    this.grouppagenum--;
  }

  ngAfterViewInit():void{


  }

}
