/**
 * @author sonal prajpati
 * @description this class is used for a add the data of the user into the form
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
// ---------------------------//
import { StudentService } from '../student.service';
import { Student } from '../student.model';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  /**
   * declare variable
   */
  public addstudent: FormGroup;
  constructor(private fb: FormBuilder, private studentService: StudentService, private route: Router) { }

  ngOnInit() {
    this.addStdentFrom();
  }
  /**
   * create a form
   */
  public addStdentFrom() {
    this.addstudent = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      mobileNo: ['', Validators.required],
      address: ['', Validators.required],
      pincode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required]

    });
  }
  /**
   *  @param student store the value of student
   * add student value in to hte database
   */
  public addStudent(student: Student): void {
    this.studentService.addStudent(student).subscribe(() => {
      this.route.navigate(['/student/view']);
    });
  }
}

