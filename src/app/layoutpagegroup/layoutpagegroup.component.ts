import { Component,Input } from '@angular/core';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule} from '@angular/forms';
import { LayoutpageComponent } from '../layoutpage/layoutpage.component';


//sliding window refresh
@Component({
  selector: 'bw-layoutpagegroup',
  standalone: false,
  styleUrl: './layoutpagegroup.component.scss',
  templateUrl: './layoutpagegroup.component.html',
})
export class LayoutpagegroupComponent {
 
    @Input() layoutpagegroup!:any;

}
