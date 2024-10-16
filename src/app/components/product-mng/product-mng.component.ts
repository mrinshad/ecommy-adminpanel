import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpProviderService } from '../../Service/http-provider.service';

@Component({
  selector: 'app-product-mng',
  standalone: true,
  imports: [
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './product-mng.component.html',
  styleUrls: ['./product-mng.component.css'],
})
export class ProductMngComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['select', 'id', 'name', 'status', 'stock', 'category', 'vendor', 'action'];
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
    this.httpProvider.getAllApprovedProducts().subscribe({
      next: (data: any) => {
        if (data != null && data.body != null) {
          const resultData = data.body;
          if (resultData) {
            this.dataSource.data = resultData.map((item: any) => ({
              id: count++,
              img: 'path/to/product/image.jpg', // You'll need to provide the actual image path
              name: item.product_name,
              status: this.getStatus(item.stock_quantity),
              stock: item.stock_quantity,
              category: item.category,
              vendor: item.seller_info,
              price: item.price,
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

  searchText: string = '';
  searchProduct() {
    this.dataSource.filter = this.searchText.trim().toLowerCase();
  }

  filterProducts(filter: string) {
    switch(filter) {
      case 'All':
        this.dataSource.filter = '';
        console.log('All');
        break;
      case 'Available':
        this.dataSource.filter = 'Available';
        console.log('Available');
        break;
      case 'Out of stock':
        this.dataSource.filter = 'Out of stock';
        console.log('Out of stock');
        break;
      case 'Archived':
        // Implement archive logic if needed
        break;
    }
  }
}

export interface ProductElement {
  id: number;
  img: string;
  name: string;
  status: string;
  stock: number;
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