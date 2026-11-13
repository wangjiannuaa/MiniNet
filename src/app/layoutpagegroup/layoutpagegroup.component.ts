import { Component } from '@angular/core';

import { MatGridListModule} from '@angular/material/grid-list';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule} from '@angular/forms';

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
    {text: 'One',  color: 'white'},
    {text: 'Two',  color: 'white'},
  ];

}
