import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FacadeRoutingModule } from './facade-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule} from '@angular/material/toolbar';

import { MatCardModule } from '@angular/material/card';


@NgModule({
    declarations: [],
    imports: [
    CommonModule,
    FormsModule,
    FacadeRoutingModule,
 
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
	ReactiveFormsModule,
	MatToolbarModule,
	MatCardModule
    ],
})
export class FacadeModule {}
