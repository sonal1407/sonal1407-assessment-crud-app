import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  // Declare variable
  private temp: any[];
  @Input() public heading: any[];
  @Input() public studentList: any[];
  @Input('data') set data(value) {
    this.temp = value;
  }
  @Output() editClicked = new EventEmitter();
  @Output() deleteClicked = new EventEmitter();
  constructor() {
  }
  get data(): any {
    return this.temp;
  }
  ngOnInit() {
    console.log(this.studentList);
    console.log(this.temp);

  }
  // Emit an event when user click on the button.
  public onEdit(data) {
    this.editClicked.emit(data);
  }
  // Emit an event when user click on the button
  public onDelete(id) {
    this.deleteClicked.emit(id);
  }
}
