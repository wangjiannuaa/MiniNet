import { Component,Input } from '@angular/core';


@Component({
  selector: 'bw-layoutpagecube',
  standalone: false,
  styleUrl: './layoutpagecube.component.scss',
  templateUrl: './layoutpagecube.component.html',
})
export class LayoutpagecubeComponent {
    @Input() layoutpagecube!:any;
    
}
