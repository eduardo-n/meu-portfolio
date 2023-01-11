import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  exports: [
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSlideToggleModule,
    FormsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatTooltipModule
  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
