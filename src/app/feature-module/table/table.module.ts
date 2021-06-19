import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { DescriptionComponent } from './component/description/description.component';
import { TableComponent } from './container/table-container.component';
import { ShellComponent } from './shell/shell.component';
import { TableTemplateComponent } from './component/table-template/table-template.component';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableTemplateComponent,
    TableComponent,
    DescriptionComponent,
    ShellComponent,
    SearchPipe,
  ],
  imports: [CommonModule, TableRoutingModule, FormsModule],
})
export class TableModule {}
