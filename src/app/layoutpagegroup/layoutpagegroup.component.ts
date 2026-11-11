import { Component } from '@angular/core';
import { MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
export interface page {
  color: string;
  text: string;
}

//sliding window refresh
@Component({
  selector: 'bw-layoutpagegroup',
  standalone: false,
  styleUrl: './layoutpagegroup.component.scss',
  templateUrl: './layoutpagegroup.component.html',
})
export class LayoutpagegroupComponent {
  protected pagegroupnum:number=1;

  pagegroup: page[] = [
    {text: 'One',  color: 'lightblue'},
    {text: 'Two',  color: 'lightgreen'},
  ];

}
