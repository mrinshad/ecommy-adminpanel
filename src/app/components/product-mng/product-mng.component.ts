import { ChangeDetectionStrategy, AfterViewInit, Component, OnInit, ViewChild, inject, Inject } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpProviderService } from '../../Service/http-provider.service';
import { NgClass } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-product-mng',
  standalone: true,
  imports: [
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatIconModule,
    FormsModule,
    NgClass,
    MatDialogModule,
    MatTooltip
  ],
  templateUrl: './product-mng.component.html',
  styleUrls: ['./product-mng.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductMngComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [
    // 'select',
    'id', 'name', 'status', 'stock', 'category', 'vendor', 'action'];
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
    let count = 1; 
    this.httpProvider.getAllApprovedProducts().subscribe({
      next: (data: any) => {
        if (data && data.body) {
          const resultData = data.body;
          this.dataSource.data = resultData.map((item: any) => ({
            id: count++,
            product_id: item.id,
            img: 'path/to/product/image.jpg', 
            name: item.product_name,
            status: this.getStatus(item.stock_quantity),
            stock: item.stock_quantity,
            category: item.category,
            vendor: item.seller_info,
            desc: item.description,
            price: item.price,
            discount: item.discount,
            sku: item.sku,
            brand: item.brand,
            dimensions: item.dimensions,
            weight: item.weight,
            shipping_weight: item.shipping_weight,
            return_policy: item.return_policy,
            created_at: new Date(item.created_at),
            updated_at: new Date(item.updated_at),
          }));
        }
      },
      error: (error: any) => {
        console.error('Error fetching products:', error);
        if (error.status === 404) {
          this.dataSource.data = [];
        }
      },
    });
  }

  getStatus(stockQuantity: number): string {
    return stockQuantity > 0 ? 'Available' : 'Out of stock';
  }

  searchText: string = '';
  searchProduct() {
    this.dataSource.filter = this.searchText.trim().toLowerCase();
  }

  filterProducts(filter: string) {
    switch (filter) {
      case 'All':
        this.dataSource.filter = '';
        break;
      case 'Available':
        this.dataSource.filter = 'Available';
        break;
      case 'Out of stock':
        this.dataSource.filter = 'Out of stock';
        break;
      case 'Archived':
        break;
    }
  }
  readonly dialog = inject(MatDialog);
  openDialog(element: any) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: element 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${element.product_id}`);
    });
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'popup-product-desc.component.html',
  styleUrls: ['./product-mng.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public element: any) { } 
}
export interface ProductElement {
  id: number;
  product_id: number;
  img: string;
  name: string;
  status: string;
  stock: number;
  category: string;
  vendor: string;
  price: number;
  desc: string;
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
