/**
 * @author sonal prajpati
 * * @description this class is used for a edit the data of the user into the form
 */
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
//----------------------------//
import { StudentService } from '../student.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  // declare variable
  public editstudentFrom: FormGroup;
  constructor(private fb: FormBuilder, private studentService: StudentService,
    private route: Router, private router: ActivatedRoute) { }

  ngOnInit() {
    this.editStdentFrom();
    this.editStudentData();
  }
  /**
    * create a form
    */
  public editStdentFrom() {
    this.editstudentFrom = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      mobileNo: ['', Validators.required],
      address: ['', Validators.required],
      pincode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required]

    });
  }
  // patch the value of Student
  public editStudentData() {
    const id = + this.router.snapshot.paramMap.get('id');
    this.studentService.getStudentId(id).subscribe((student: Student) => {
      // this.getStudent(student);
      this.editstudentFrom.patchValue(
        {
          id: student.id,
          name: student.name,
          mobileNo: student.mobileNo,
          address: student.address,
          pincode: student.pincode,
          city: student.city,
          state: student.state
        });
    });
  }
  // edit the student records
  public editstudent(student) {
    this.studentService.updateStudent(student).subscribe(() => {
      this.route.navigate(['/student/view']);
    });
  }
}
