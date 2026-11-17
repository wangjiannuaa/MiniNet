import { Component,Input } from '@angular/core';

@Component({
  selector: 'bw-genom',
    standalone: false,
    
  styleUrl: './genom.component.scss',
  templateUrl: './genom.component.html',
})
export class GenomComponent {
    @Input() message!:any;
}
