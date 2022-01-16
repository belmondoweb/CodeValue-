import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './products/product-ditals/product.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [{ path: '', component: ProductsComponent },
  { path: 'product/add/:id', component: ProductComponent},
   { path: 'product/edit/:id', component: ProductComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
