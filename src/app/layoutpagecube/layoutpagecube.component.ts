import { Component,Input } from '@angular/core';

//能量块演播室由一个导播以及演出组组成，但是每次出场只有一个演出组
//能量块从startpoint=>director，再分配至pagegroups


@Component({
  selector: 'bw-layoutpagecube',
  standalone: false,
  styleUrl: './layoutpagecube.component.scss',
  templateUrl: './layoutpagecube.component.html',
})
export class LayoutpagecubeComponent {
     @Input() layoutpagecube!:any;
}
