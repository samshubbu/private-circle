import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FakeDataService } from 'src/app/_service/fake-data.service';
import { ITableData } from '../interface/list';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss'],
})
export class TableComponent implements OnInit {
  tableData: Observable<ITableData> | any;
  searchText: string = '';
  selectedRow: any;
  constructor(private _dataService: FakeDataService) {}

  ngOnInit(): void {
    this.tableData = this._dataService.getData();
  }

  selectedList(data: ITableData) {
    this.selectedRow = data;
  }
}
