import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalSimpleInformationComponent } from './modal/modal-simple-information/modal-simple-information.component';
import { MaterialModule } from './modules/material/material.module';

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
  ]
})
export class SharedModule { }
