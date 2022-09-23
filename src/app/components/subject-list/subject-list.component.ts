import { Component, OnInit } from '@angular/core';

import { Subject } from '../../interfaces/Subject';
import { SubjectsServiceService } from '../../services/subjectsService/subjects-service.service';
import { ModalService } from '../../services/modalService/modal.service';
import { SubjectListService } from '../../services/subjectListService/subject-list.service';

@Component({
  selector: 'dadb-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css'],
})
export class SubjectListComponent implements OnInit {
  constructor(
    private subjectsServiceService: SubjectsServiceService,
    public modalService: ModalService,
    public subjectListService: SubjectListService
  ) {}

  selectSubject(id: number): void {
    this.subjectListService.subjectId = id;
  }

  getSubjects(): void {
    this.subjectListService.getSubjects();
  }

  toggleEditModal(mode: string, subject: Subject): void {
    this.modalService.setModalMode(mode);
    this.modalService.toggleModal();
    this.selectSubject(subject.id);
  }

  toggleSaveModal(mode: string): void {
    this.modalService.setModalMode(mode);
    this.modalService.toggleModal();
    this.subjectListService.subjectId = undefined;
  }

  deleteSubject(subject: Subject): void {
    this.subjectListService.subjects = this.subjectListService.subjects!.filter(
      (filteredSubject) => filteredSubject !== subject
    );
    this.subjectsServiceService.deleteSubject(subject.id).subscribe();
  }

  ngOnInit(): void {
    this.getSubjects();
  }
}
