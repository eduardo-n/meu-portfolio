import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalSimpleInformationComponent } from './modal/modal-simple-information/modal-simple-information.component';

@NgModule({
  declarations: [
    ModalSimpleInformationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalSimpleInformationComponent
  ]
})
export class SharedModule { }
