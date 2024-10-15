import { Component } from '@angular/core';



export interface ProductRequest {
  productID: string;
  productName: string;
  category: string;
  requestDate: Date;
  requestedBy: string;
  status: string;
  stockQuantity: number;
}

const PRODUCT_REQUESTS: ProductRequest[] = [
  { productID: 'P001', productName: 'Product A', category: 'Category 1', requestDate: new Date(), requestedBy: 'User1', status: 'Pending', stockQuantity: 100 },
  { productID: 'P002', productName: 'Product B', category: 'Category 2', requestDate: new Date(), requestedBy: 'User2', status: 'Approved', stockQuantity: 50 },
  // Add more product requests here
];

@Component({
  selector: 'app-product-req',
  standalone: true,
  imports: [],
  templateUrl: './product-req.component.html',
  styleUrl: './product-req.component.css'
})
export class ProductReqComponent {

}
