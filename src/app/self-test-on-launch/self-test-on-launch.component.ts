import { Component , Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { LauncherService } from './launcher-service.service';

export interface PeriodicElement {
  name: string;
  position: number;
  status: string;
}

/*const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', status: 'H'},
  {position: 2, name: 'Helium', status: 'He'},
  {position: 3, name: 'Lithium', status: 'Li'}
];
*/



@Component({
  selector: 'bw-self-test-on-launch',
  standalone: false,
  styleUrl: './self-test-on-launch.component.scss',
  templateUrl: './self-test-on-launch.component.html',
})
export class SelfTestOnLaunchComponent {

  displayedColumns: string[] = ['position', 'name', 'status'];
  @Input() dataSource!:PeriodicElement[];
  constructor(private launcherservice:LauncherService){

    this.launcherservice.observeLauncherTest().subscribe(test=>{this.dataSource=test.selftest})
  };
}
