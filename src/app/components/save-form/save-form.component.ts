import { Component, OnInit } from '@angular/core';

import { Subject } from '../../interfaces/Subject';
import { SubjectsServiceService } from '../../services/subjectsService/subjects-service.service';
import { MessageService } from '../../services/messageService/message.service';
import { SubjectListService } from '../../services/subjectListService/subject-list.service';
import { ModalService } from '../../services/modalService/modal.service';
import {
  calculateQualificationsAverage,
  checkEmptyFields,
  validateNumberFileds,
} from '../../helpers';

@Component({
  selector: 'dadb-save-form',
  templateUrl: './save-form.component.html',
  styleUrls: ['./save-form.component.css'],
})
export class SaveFormComponent implements OnInit {
  average: number = 0;

  constructor(
    private subjectsServiceService: SubjectsServiceService,
    private messageService: MessageService,
    private subjectListService: SubjectListService,
    private modalService: ModalService
  ) {}

  getQualificationsAverage(qualifications: number[]): void {
    const average = calculateQualificationsAverage(qualifications);
    this.average = average;
  }

  addNewSubject(
    subject: string,
    semester: string,
    first_qualification: string,
    second_qualification: string,
    third_qualification: string
  ): void {
    subject = subject.trim();
    semester = semester.trim();
    let qualification1 = parseFloat(first_qualification);
    let qualification2 = parseFloat(second_qualification);
    let qualification3 = parseFloat(third_qualification);

    const thereEmptyFields = checkEmptyFields([subject, semester]);
    const thereWrongNumberField = validateNumberFileds([
      qualification1,
      qualification2,
      qualification3,
    ]);

    if (thereEmptyFields) {
      this.messageService.addMesage('Campos obligatorios!');
      return;
    }

    if (thereWrongNumberField) {
      this.messageService.addMesage(
        'Las calificaciones deben estar entre 0 y 5!'
      );
      return;
    }

    this.getQualificationsAverage([
      qualification1,
      qualification2,
      qualification3,
    ]);

    this.subjectsServiceService
      .addSubject({
        subject,
        semester,
        first_qualification: qualification1,
        second_qualification: qualification2,
        third_qualification: qualification3,
        average: this.average,
      } as Subject)
      .subscribe((subject) => {
        this.subjectListService.subjects!.push(subject);
        this.modalService.toggleModal();
      });
  }

  ngOnInit(): void {}
}
