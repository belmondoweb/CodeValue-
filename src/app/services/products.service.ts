import { Injectable } from '@angular/core';
import { Observable, pipe, throwError } from 'rxjs';
import { IProduct } from './product';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
// import { stringify } from 'querystring';
const headerOption = {
  headers: new HttpHeaders().set('Content-Type', 'application/json')
}
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productList: IProduct[]=[];
  id: number = 0;
   selectedProduct: IProduct = new IProduct()

   private readonly baseUrl='http://localhost:3000/products';
        constructor(private http: HttpClient) { }

    ////* GET FETCH PROD: ////
      getProducts(): Observable<IProduct[]> {
        return this.http.get<any[]>(this.baseUrl).pipe(
          retry(1),
          catchError(this.handleError))
      }
    ////* SELECTED PRODUCT: ////
      getSelectedProduct(id:number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`).pipe(
          retry(1),
          catchError(this.handleError))
      }

    ////* DELETE: ////
      delete(id:number):Observable<IProduct[]>{
       return this.http.delete<any>(`${this.baseUrl}/${id}`).pipe(
        retry(1),
        catchError(this.handleError))
      }
    ////* UPDATE: ////
    onUpdate(product:IProduct, id:any): Observable<IProduct> {
      // const jsonBody = JSON.stringify(product)
     return this.http.put<any>(`${this.baseUrl}/${id}`,product,headerOption).pipe(
      retry(1),
      catchError(this.handleError))

    }
        ////* Add: ////
    add(product:IProduct): Observable<IProduct> {
      // const jsonBody = JSON.stringify(product)
      return this.http.post<any>(this.baseUrl, product,headerOption).pipe(
        retry(1),
        catchError(this.handleError))

    }

        ////* ERROR* ////
       _errorHandler(error: Response) {
        debugger;
        console.log(error);
        return Observable.throw(error || 'Internal server error');

      }
      private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('Client Side Error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          `
        There is a problem with the service.
        We are notified & working on it. Please try again later.
        N.Peretz team`);
      };
  }




