import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FacadeRoutingModule } from './facade-routing.module';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

	 
@NgModule({
  declarations: [],
    imports: [CommonModule,FormsModule,FacadeRoutingModule,MatAutocompleteModule,MatSelectModule,MatFormFieldModule,MatButtonModule,MatInputModule],
})
export class FacadeModule {}
