/**
 * @author sonal prajapati
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ---------------------------------///
import { ReactiveFormsModule } from '@angular/forms';
import { StudentRoutingModule } from './student-routing.module';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { StudentService } from './student.service';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditComponent, ViewComponent, AddComponent, DemoComponent],
  providers: [StudentService]
})
export class StudentModule { }
