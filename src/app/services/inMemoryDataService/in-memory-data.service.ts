import { Injectable } from '@angular/core';
import { InMemoryDbService }  from 'angular-in-memory-web-api';

import { Subject } from '../../interfaces/Subject';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  // constructor() { }
  createDb(){
    const subjects:Subject[] = [
      {
        id:1,
        subject:"Matematicas",
        semester:"Semestre 1",
        first_qualification:4.5,
        second_qualification:4.4,
        third_qualification:4.6,
        average:4.5
      },
    ];
    return {subjects};
  }

  generateId(subjects:Subject[]):number{
    return subjects.length > 0 ? Math.max(...subjects.map(subject=>subject.id)) + 1:11;
  }
}
