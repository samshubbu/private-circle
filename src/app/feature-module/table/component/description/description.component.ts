import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ITableData } from '../../interface/list';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionComponent implements OnInit {
  @Input() selectedRow: ITableData | any;
  constructor() {}

  ngOnInit(): void {}
}
