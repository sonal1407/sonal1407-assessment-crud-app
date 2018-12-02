/**
 * @author sonal prajpati
 * * @description this class is used for a view the data of the user
 */
import { Component, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
// -----------------------//
import { StudentService } from '../student.service';
import { Student } from '../student.model';
import { ISubscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, OnDestroy {
  /**
   * declare variable.
   */
  public students: Student[];
  private subscription: ISubscription;
  public heading: any[];
  constructor(private studentService: StudentService, private route: Router) {
    this.students = [];
    this.heading = ['id', 'name', 'mobile_No', 'address', 'pincode', 'city', 'state', 'action'];
  }

  ngOnInit() {
    this.getStudent();

  }
  /**
   * get all the student records.
   */
  public getStudent(): void {
    this.subscription = this.studentService.getStudent().subscribe(
      (student: Student[]) => {
        this.students = student;
      });

  }

  /**
   * @param id   particular id of student
   * @description delete the particular id wise reord
   */
  public onDelete(id: number) {
    console.log('kjgbh');
    this.studentService.deleteStudent(id).subscribe(() => {
      this.getStudent();
    });
  }
  public onEdit(id: number) {
    console.log('jkb');
    this.route.navigate(['/student/edit' + '/' + id]);
  }
  /**
   * destroy the component  when user goto the next route
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
