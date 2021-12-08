import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { IPost, PostasyncService } from 'src/app/services/postasync.service';
import { IProduct } from 'src/app/services/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$:Observable<IProduct[]> |any;

  @Output()selectedProduct: IProduct |any;
  searchTerm: string | any;
  products:IProduct[]=[];
 private routeSub: Subscription | undefined;

   constructor(private productService: ProductsService, private router: Router, private server: PostasyncService, private  fb: FormBuilder ) { }

  ngOnInit(): void {
          this.getProducts()
        }

         // ********** Get Product data  **********//
          getProducts(){
            this.products$ = this.productService.getProducts()
          }

        // ******** Pass data to form *********** //
        onEdit(prod: IProduct){
        this.productService.selectedProduct=Object.assign({}, prod);
        console.log(prod)
        }

       // ******** Delete *********** //
        delete(id:number){
          var ans = (confirm("Are you sure to delete this product with Id#: " + id)==true);
            if(ans){
             this.routeSub = this.productService.delete(id).subscribe(
              (res) => {
                this.ngOnInit();
               },
            err => { console.log(err); }
          ); }
        }


          ngOnDestroy(){
            this.routeSub?.unsubscribe();
          }

}
