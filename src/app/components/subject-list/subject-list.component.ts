import { Component, OnInit } from '@angular/core';

import { Subject } from '../../interfaces/Subject';
import { SubjectsServiceService } from '../../services/subjectsService/subjects-service.service';
import { ModalService } from '../../services/modalService/modal.service';

@Component({
  selector: 'dadb-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css'],
})
export class SubjectListComponent implements OnInit {
  subjects?: Subject[];
  subjectId?: number;

  constructor(
    private subjectsServiceService: SubjectsServiceService,
    public modalService: ModalService
  ) {}

  selectSubject(id: number): void {
    this.subjectId = id;
  }

  getSubjects(): void {
    this.subjectsServiceService
      .getSubjects()
      .subscribe((subjects) => (this.subjects = subjects));
  }

  toggleEditModal(mode: string, subject: Subject): void {
    this.modalService.setModalMode(mode);
    this.modalService.toggleModal();
    this.selectSubject(subject.id);
  }

  toggleSaveModal(mode: string): void {
    this.modalService.setModalMode(mode);
    this.modalService.toggleModal();
    this.subjectId = undefined;
  }

  ngOnInit(): void {
    this.getSubjects();
  }
}
