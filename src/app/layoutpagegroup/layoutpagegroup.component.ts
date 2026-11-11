import { Component } from '@angular/core';
import { MatMenuModule} from '@angular/material/menu';


//sliding window refresh
@Component({
  selector: 'bw-layoutpagegroup',
  standalone: false,
  styleUrl: './layoutpagegroup.component.scss',
  templateUrl: './layoutpagegroup.component.html',
})
export class LayoutpagegroupComponent {
  protected pagegroup:number=1;



}
