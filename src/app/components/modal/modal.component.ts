import { Component, OnInit, Input } from '@angular/core';

import { ModalService } from '../../services/modalService/modal.service';

@Component({
  selector: 'dadb-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() subjectId?: number;

  constructor(public modalService: ModalService) {}

  ngOnInit(): void {}
}
