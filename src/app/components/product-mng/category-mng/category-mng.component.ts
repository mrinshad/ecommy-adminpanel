import {SelectionModel} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';

export interface PeriodicElement {
  category_name: string;
  sl_no: number;
  type: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {sl_no: 1, category_name: 'Hydrogen', type: '1.0079'},
  {sl_no: 2, category_name: 'Helium', type: '4.0026'},
  {sl_no: 3, category_name: 'Lithium', type: '6.941'},
  {sl_no: 4, category_name: 'Beryllium', type: '9.0122'},
  {sl_no: 5, category_name: 'Boron', type: '10.811'},
  {sl_no: 6, category_name: 'Carbon', type: '12.0107'},
  {sl_no: 7, category_name: 'Nitrogen', type: '14.0067'},
  {sl_no: 8, category_name: 'Oxygen', type: '15.9994'},
  {sl_no: 9, category_name: 'Fluorine', type: '18.9984'},
  {sl_no: 10, category_name: 'Neon', type: '20.1797'}
];

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
  displayedColumns: string[] = ['select', 'sl_no', 'category_name', 'type'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.sl_no + 1}`;
  }
}
