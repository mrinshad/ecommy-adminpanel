import { HttpProviderService } from './../../../Service/http-provider.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

export interface PeriodicElement {
  category_name: string;
  sl_no: number;
  type: string;
}

/**
 * @title Table with selection
 */
@Component({
  selector: 'app-category-mng',
  templateUrl: './category-mng.component.html',
  styleUrl: './category-mng.component.css',
  standalone: true,
  imports: [MatTableModule, MatCheckboxModule],
})
export class CategoryMngComponent {
  displayedColumns: string[] = ['select', 'sl_no', 'Category id', 'Category name', 'type'];
  dataSource = new MatTableDataSource<PeriodicElement>;
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor(private httpProvider: HttpProviderService) { }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.sl_no + 1}`;
  }

  // getAllCategories() {
  //   let count = 1
  //   this.httpProvider.
  // }
}

export interface CategoryElement {
  id: number;
  category_id: string;
  category_name: string;
  category_description: string;
  type: string;
  isactive: string;
}