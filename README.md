
Angular Crud with Json server -lazy router - async pipe
 # 
 json-server --watch ./src/app/data.json
 
 npm i bootstrap

 ● src
 +---● app
 |   +--● product-list
 |   |  |--product-list.component.ts|.html
 |   |  |
 |   |  +--● product
 |   |  |  |--product-form.component.ts|.html
 |   |  |  |
 |   |  |-products.module.ts
 |   |  |-products-routing.module.ts
 |      |-produc-search.pipe.ts
 |      |
 |   +--● services 
 |   |  |--products.service.ts
 |   |  |--product.model.ts
 |   |
 |   |--app.module.ts
 |
 |--index.html (cdn path for bootstrap & fa icons)

{    
<link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384- Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<link href="//netdna.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" />
 }

- Changed "ID" to "id" due to json server 
 export class IProduct {
  id?: number;
  Name:string='';
  Description: string='';
  Price: number=0;

}
