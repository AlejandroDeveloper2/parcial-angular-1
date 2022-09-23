import { Injectable } from '@angular/core';

import { Subject } from '../../interfaces/Subject';
import { SubjectsServiceService } from '../../services/subjectsService/subjects-service.service';

@Injectable({
  providedIn: 'root',
})
export class SubjectListService {
  subjectId?: number;
  subjects?: Subject[];

  constructor(private subjectsServiceService: SubjectsServiceService) {}

  getSubjects(): void {
    this.subjectsServiceService
      .getSubjects()
      .subscribe((subjects) => (this.subjects = subjects));
  }
}
