import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HttpProviderService } from '../../../Service/http-provider.service';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DatePipe, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-req',
  standalone: true,
  imports: [
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatIconModule,
    FormsModule,
    DatePipe,
    NgIf,
    NgClass
  ],
  templateUrl: './product-req.component.html',
  styleUrls: ['./product-req.component.css']
})
export class ProductReqComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['ID', 'Product Name', 'Vendor', 'Category', 'Price', 'Stock', 'Submission Date', 'Uploaded Status', 'Action'];
  dataSource: MatTableDataSource<ProductElement>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private httpProvider: HttpProviderService) {
    this.dataSource = new MatTableDataSource<ProductElement>([]);
  }

  ngOnInit() {
    this.getAllProducts();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getAllProducts() {
    var count = 1;
    this.httpProvider.getAllProducts().subscribe({
      next: (data: any) => {
        if (data) {
          this.dataSource.data = data.body.map((item: any) => ({
            id: count++,
            product_id: item.id,
            img: 'path/to/product/image.jpg',
            name: item.product_name,
            status: this.getStatus(item.stock_quantity),
            stock: item.stock_quantity + ' Pcs',
            uploaded_status: item.status,
            category: item.category,
            vendor: item.seller_info,
            price: '₹' + item.price,
            discount: item.discount,
            sku: item.sku,
            brand: item.brand,
            dimensions: item.dimensions,
            weight: item.weight,
            shipping_weight: item.shipping_weight,
            return_policy: item.return_policy,
            created_at: new Date(item.created_at),
            updated_at: new Date(item.updated_at)
          }));
        }
      },
      error: (error: any) => {
        console.error('Error fetching products:', error);
        if (error.status === 404) {
          this.dataSource.data = [];
        }
      }
    });
  }

  getStatus(stockQuantity: number): string {
    if (stockQuantity > 0) {
      return 'Available';
    } else {
      return 'Out of stock';
    }
  }

  approveProduct(product_id:any) {
    this.httpProvider.approveProduct({id:product_id}).subscribe({
      next:(response:any)=>{
        console.log('Product approved succesfully')
        this.ngOnInit();
      },
      error:(error:any)=>
        console.error('Error approving product',error)
    });
  }
  rejectProduct(product_id: any) {
    this.httpProvider.rejectProduct({id:product_id}).subscribe({
      next:(response:any)=>{
        console.log('Product Rejected');
        this.ngOnInit();
      },
      error:(error:any)=>{
        throw error('Rejection failed',error);
      }
    })
  }
}

export interface ProductElement {
  id: number;
  product_id: number;
  img: string;
  name: string;
  status: string;
  stock: number;
  uploaded_status: string;
  category: string;
  vendor: string;
  price: number;
  discount: number;
  sku: string;
  brand: string;
  dimensions: string;
  weight: number;
  shipping_weight: number;
  return_policy: string;
  created_at: Date;
  updated_at: Date;
}