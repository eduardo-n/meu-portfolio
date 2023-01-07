import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  exports: [
    MatSidenavModule,
    MatProgressSpinnerModule
  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
