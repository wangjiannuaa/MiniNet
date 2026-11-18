import { Component,signal,AfterContentChecked,AfterViewInit,ElementRef,ViewChild,ViewEncapsulation,Input,AfterContentInit,AfterViewChecked } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PageEvent, MatPaginatorModule} from '@angular/material/paginator';
import { LayoutpagegroupComponent } from '../layoutpagegroup/layoutpagegroup.component';

@Component({
  selector: 'bw-layoutdirector',
  standalone: false,
  styleUrl: './layoutdirector.component.scss',
    templateUrl: './layoutdirector.component.html',
    encapsulation:ViewEncapsulation.Emulated,
})


export class LayoutdirectorComponent {
    @Input() layoutpagecube!:any;
    @ViewChild('pcChild3')layoutpagegroup!:LayoutpagegroupComponent; 
    pageSize = signal(10);hidePageSize = signal(false);showPageSizeOptions = signal(true);
    pageSizeOptions = signal([5, 10, 25]);
    pageIndex = signal(0);

    
    length = signal(50);
 
    showFirstLastButtons = signal(true);
    disabled = signal(false);

    pageEvent = signal<PageEvent | undefined>(undefined);

    handlePageEvent(e: PageEvent) {
    this.pageEvent.set(e);
    this.length.set(e.length);
    this.pageSize.set(e.pageSize);
    this.pageIndex.set(e.pageIndex);
    }

    setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions.set(setPageSizeOptionsInput.split(',').map(str => +str));
    }
    }

    constructor(){}
    ngAfterContentChecked():void{

    }
    ngAfterViewChecked():void{

	
    }
    
}
