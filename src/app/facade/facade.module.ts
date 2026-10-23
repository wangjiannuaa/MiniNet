import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacadeRoutingModule } from './facade-routing.module';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule} from '@angular/material/form-field';
	 
@NgModule({
  declarations: [],
  imports: [CommonModule,FacadeRoutingModule,MatAutocompleteModule,MatSelectModule,MatFormFieldModule],
})
export class FacadeModule {}
