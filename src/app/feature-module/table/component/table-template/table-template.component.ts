import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ITableData } from '../../interface/list';
import { first, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableTemplateComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();
  @Input() listData: Observable<ITableData[]> | any;
  @Input() searchText: string = '';
  @Output() emitSelectedDetails: EventEmitter<ITableData> = new EventEmitter();
  selected_row_id: number = 1;
  constructor() {}

  ngOnInit(): void {
    this.listData
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: any) => this.getDetails(res[0]));
  }

  getDetails(details: ITableData) {
    this.selected_row_id = details.id;
    this.emitSelectedDetails.emit(details);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
