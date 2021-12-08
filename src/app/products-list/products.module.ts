import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './products/product-ditals/product.component';
import { ProductsComponent } from './products.component';
import { ProductSearchPipe } from './produc-search.pipe';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductSearchPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
