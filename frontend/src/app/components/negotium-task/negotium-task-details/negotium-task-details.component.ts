import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-negotium-task-details',
  templateUrl: './negotium-task-details.component.html',
  styleUrls: ['./negotium-task-details.component.scss']
})
export class NegotiumTaskDetailsComponent implements OnInit {
  task: Object = {
    assignedTo: <string>'Alek',
    status: <string>'Done',
    importanceLevel: <number>10,
    category: <string>'Frontend',
    isNegotium: <boolean>true,
    returnBackground: function() {
      if (this.isNegotium) {
        return 'negotium-background';
      } else {
        return 'other-background';
      }
    },
    returnButtonColor: function() {
      if (this.isNegotium) {
        return 'button-green';
      } else {
        return 'button-pink';
      }
    }
  };

  constructor() {}

  ngOnInit() {}
}
