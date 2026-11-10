import { Injectable } from '@angular/core';
import { Observable, of as ObservableOf } from 'rxjs';
import { HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class LauncherService {
    constructor(private httpprotocol:HttpClient){}
  observeLauncherTest():Observable<any>{

	let observableany = this.httpprotocol.get<any>(
	    '/api/selftest:syntax');


	return observableany;
    }

}
