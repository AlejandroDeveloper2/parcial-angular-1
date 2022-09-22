import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Subject } from '../../interfaces/Subject';
import { MessageService } from '../../services/messageService/message.service';

@Injectable({
  providedIn: 'root',
})
export class SubjectsServiceService {
  private subjectsUrl = 'api/subjects';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  private addMessage(message: string): void {
    this.messageService.addMesage(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.addMessage(`${operation} falló: ${error.message}`);
      return of(result as T);
    };
  }

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.subjectsUrl).pipe(
      tap((_) => this.addMessage('Materias obtenidas correctamente!')),
      catchError(this.handleError<Subject[]>('getSubjects', []))
    );
  }

  getSubject(id: number): Observable<Subject> {
    const url = `${this.subjectsUrl}/${id}`;
    return this.http.get<Subject>(url).pipe(
      tap((_) => this.addMessage(`Materia encontrada:${id}`)),
      catchError(this.handleError<Subject>(`getSubject id=${id}`))
    );
  }

  updateSubject(subject: Subject): Observable<any> {
    return this.http.put(this.subjectsUrl, subject, this.httpOptions).pipe(
      tap((_) =>
        this.addMessage(`Materia actualizada correctamente! id=${subject.id}`)
      ),
      catchError(this.handleError<any>('updateSubject'))
    );
  }
}
