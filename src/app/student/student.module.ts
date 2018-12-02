/**
 * @author sonal prajapati
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'sonal-table';
import { ReactiveFormsModule } from '@angular/forms';
// ---------------------------------///
import { StudentRoutingModule } from './student-routing.module';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { StudentService } from './student.service';


@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    TableModule
  ],
  declarations: [EditComponent, ViewComponent, AddComponent],
  providers: [StudentService]
})
export class StudentModule { }
