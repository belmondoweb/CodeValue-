import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './products-list/products/product-ditals/product.component';

const routes: Routes = [
   { path: '', redirectTo: 'products', pathMatch: 'full' },

   { path: 'products', loadChildren: () => import('./products-list/products.module').then(m => m.ProductsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
