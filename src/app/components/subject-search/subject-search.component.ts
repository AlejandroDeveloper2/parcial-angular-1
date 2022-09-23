import { Component, OnInit } from '@angular/core';
import { Observable, Subject as SubjectRx } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { ModalService } from '../../services/modalService/modal.service';
import { Subject } from '../../interfaces/Subject';
import { SubjectsServiceService } from '../../services/subjectsService/subjects-service.service';
import { SubjectListService } from '../../services/subjectListService/subject-list.service';

@Component({
  selector: 'dadb-subject-search',
  templateUrl: './subject-search.component.html',
  styleUrls: ['./subject-search.component.css'],
})
export class SubjectSearchComponent implements OnInit {
  subjects$!: Observable<Subject[]>;
  private searchTerms = new SubjectRx<string>();

  constructor(
    public modalService: ModalService,
    private subjectsServiceService: SubjectsServiceService,
    public subjectListService: SubjectListService
  ) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  selectSubject(id: number): void {
    this.subjectListService.subjectId = id;
  }

  toggleEditModal(mode: string, subject: Subject): void {
    this.modalService.setModalMode(mode);
    this.modalService.toggleModal();
    this.selectSubject(subject.id);
  }

  ngOnInit(): void {
    this.subjects$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) =>
        this.subjectsServiceService.searchSubjectByName(term)
      )
    );
  }
}
