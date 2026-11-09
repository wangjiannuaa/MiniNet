import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProductService } from './services/product-service.service';
import { CuisineLoader } from './services/cuisine-loader.service';
import { ProtagnistRoutingModule } from './protagnist-routing.module';
import { AAComponent } from './aa/aa.component';
import { AardvarkComponent } from './aardvark/aardvark.component';
import { AbackComponent } from './aback/aback.component';
import { PageeComponent } from './pagee/pagee.component';
import { ProducteeComponent } from './productee/productee.component';
import { PMondutyComponent } from './pmonduty/pmonduty.component';
import { LicenseeComponent } from './licensee/licensee.component';
import { CuisineComponent } from './cuisine-component/cuisine-component.component';


@NgModule({
  declarations: [
    AAComponent,
    AardvarkComponent,
    AbackComponent,
    PageeComponent,
    ProducteeComponent,
    PMondutyComponent,
    LicenseeComponent,
    CuisineComponent,
  ],
  imports: [CommonModule, ProtagnistRoutingModule, FormsModule, HttpClientModule],
  exports: [AAComponent, AardvarkComponent, AbackComponent],
  providers: [ProductService,CuisineLoader],
})
export class ProtagnistModule {}
