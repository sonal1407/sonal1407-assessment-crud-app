/**
 * @author sonal prajapati
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/**
 * Route to the navigation
 */
const routes: Routes = [
  { path: 'student', loadChildren: './student/student.module#StudentModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
