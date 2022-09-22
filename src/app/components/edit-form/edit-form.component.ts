import { Component, OnInit, Input } from '@angular/core';

import { Subject } from '../../interfaces/Subject';
import { SubjectsServiceService } from '../../services/subjectsService/subjects-service.service';
import { ModalService } from '../../services/modalService/modal.service';
import { MessageService } from '../../services/messageService/message.service';
import {
  calculateQualificationsAverage,
  checkEmptyFields,
} from '../../helpers';

@Component({
  selector: 'dadb-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
})
export class EditFormComponent implements OnInit {
  @Input() subjectId?: number;
  @Input() selectedSubject?: Subject;
  average: number = 0;

  constructor(
    private subjectsServiceService: SubjectsServiceService,
    private modalService: ModalService,
    private messageService: MessageService
  ) {}

  getSubject(): void {
    this.subjectsServiceService
      .getSubject(this.subjectId!)
      .subscribe((subject) => {
        this.getQualificationsAverage([
          subject.first_qualification,
          subject.second_qualification,
          subject.third_qualification,
        ]);
        return (this.selectedSubject = subject);
      });
  }

  getQualificationsAverage(qualifications: number[]): void {
    const average = calculateQualificationsAverage(qualifications);
    this.average = average;
  }

  updateSubject(): void {
    if (this.selectedSubject) {
      const thereAnError: boolean = checkEmptyFields([
        this.selectedSubject.subject,
        this.selectedSubject.semester,
      ]);
      if (thereAnError) {
        this.messageService.addMesage('Campos obligatorios!');
        return;
      }
      this.getQualificationsAverage([
        this.selectedSubject.first_qualification,
        this.selectedSubject.second_qualification,
        this.selectedSubject.third_qualification,
      ]);
      this.subjectsServiceService
        .updateSubject(this.selectedSubject)
        .subscribe(() => {
          this.modalService.toggleModal();
          this.subjectsServiceService.getSubjects();
        });
    }
  }

  ngOnInit(): void {
    this.getSubject();
  }
}
