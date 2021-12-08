import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup,  NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostasyncService } from 'src/app/services/postasync.service';
import { IProduct } from 'src/app/services/product';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

 @Input('selectedProduct') selectedProduct!: IProduct
 @Input('products$') products$ = new IProduct()
 prodHeader: IProduct|any;
  header:any;
  id: number | any;
  form: FormGroup | undefined;

  private routeSub: Subscription | undefined;
    constructor(public productsService: ProductsService,
      private post: PostasyncService, private fb: FormBuilder, private router: Router) { }

    ngOnInit() {
       this.header = this.products$.id === 0 ? 'Edit Product' : 'Add Product' ;
      this.form= this.fb.group({
        id:[''],
        Name: ['', Validators.required, Validators.pattern('^[a-zA-Z]+$')],
        Price: ['', Validators.required],
        Description: ['', Validators.required],
      });
    }


   // ******** Save form *********** //
    onSubmit(form: NgForm) {
      if (this.productsService.selectedProduct.id == null)
      this.insertRecord(form.value);
      else
        this.updateRecord(form.value);

    }
    // ******** Refresh form *********** //
      resetForm(form: NgForm) {
        form.form.reset();
        this.productsService.selectedProduct = new IProduct();
      }


     // ******** Save new record to List *********** //
        insertRecord(form: any) {
          this.routeSub = this.productsService.add(form).subscribe((res) => {
            // this.products$=res;
                    alert('Saved successfully')
                    this.router.navigateByUrl('products');
                },
            err => { console.log(err); }
          );
        }

      // ******** Update record *********** //
        updateRecord(form: NgForm) {
         this.routeSub = this.productsService.onUpdate(
           this.productsService.selectedProduct,
           this.productsService.selectedProduct.id).subscribe(
             (res) => {
              alert('Updated successfully')

            },
            err => { console.log(err); }
          );
        }

        ngOnChanges() {
          console.log(this.selectedProduct);
        }
        ngOnDestroy(){
          this.routeSub?.unsubscribe();
        }

}
