import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalModel } from 'src/app/core/models/modal.model';

@Component({
  selector: 'app-modal-simple-information',
  templateUrl: './modal-simple-information.component.html',
  styleUrls: ['./modal-simple-information.component.scss']
})
export class ModalSimpleInformationComponent implements OnInit {

  constructor(
    public modalRef: MatDialogRef<ModalSimpleInformationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalModel
  ) { }

  ngOnInit(): void {
    this.data.title ?? 'Título';
    this.data.text ?? 'Texto';
    this.data.buttonText ?? 'Entendi'
  }

  close() {
    this.modalRef.close();
  }
}
