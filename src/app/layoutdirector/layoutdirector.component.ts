import { Component,signal,AfterViewInit,ElementRef,ViewChild,ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PageEvent, MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'bw-layoutdirector',
  standalone: false,
  styleUrl: './layoutdirector.component.scss',
    templateUrl: './layoutdirector.component.html',
    encapsulation:ViewEncapsulation.Emulated,
})


export class LayoutdirectorComponent {
   length = signal(50);
  pageSize = signal(10);
  pageIndex = signal(0);
  pageSizeOptions = signal([5, 10, 25]);

  hidePageSize = signal(false);
  showPageSizeOptions = signal(true);
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
  ngAfterViewInit():void{


  }

    

}
