import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalSimpleInformationComponent } from './modal/modal-simple-information/modal-simple-information.component';
import { MaterialModule } from './modules/material/material.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { getPortuguesePaginatorIntl } from './utils/translate-paginator-intl';

@NgModule({
  declarations: [
    ModalSimpleInformationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ModalSimpleInformationComponent
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getPortuguesePaginatorIntl() }
  ]
})
export class SharedModule { }
