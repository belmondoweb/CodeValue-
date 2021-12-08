import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../services/product';

@Pipe({
  name: 'producSearch'
})
export class ProductSearchPipe implements PipeTransform {
prod!:IProduct

    transform(value: any, args?: any): any {
      if(!value)return null;
      if(!args)return value;

      args = args.toLowerCase();

      return value.filter(function(data:any){
       
          return JSON.stringify(data).toLowerCase().includes(args);
      });
  }

}


