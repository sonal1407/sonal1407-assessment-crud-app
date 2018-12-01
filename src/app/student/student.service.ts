/**
 * @author sonal prajpati
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// ---------------------------//
import { Student } from './student.model';

@Injectable()
export class StudentService {
  // URL to web api.
  readonly url = 'http://localhost:3000/student';

  constructor(private http: HttpClient) {
  }
  /**
   * @description get all the records of the student.
   */
  public getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url);
  }

  /**
   * @description get the records of the student  with paerticular id.
   */
  public getStudentId(id: number): Observable<Student> {
    const url = this.url + '/' + id;
    return this.http.get<Student>(url);
  }
  /**
   * @description update the records of the student.
   */
  public updateStudent(student): Observable<Student> {
    return this.http.put<Student>(this.url + '/' + student.id, student);
  }
  /**
   * @description update the records of the student.
   */
  public addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.url, student);
  }
  /**
   * @description get the records of the student  with paerticular id. 
   */
  public deleteStudent(id: number): Observable<Student> {
    const url = this.url + '/' + id;
    return this.http.delete<Student>(url);
  }
}
