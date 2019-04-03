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
    isNegotium: <boolean>false,
    returnBackground: function() {
      return this.isNegotium ? 'negotium-background' : 'other-background';
    },
    returnButtonColor: function() {
      return this.negotium ? 'button-green' : 'button-pink';
    }
  };

  constructor() {}

  ngOnInit() {}
}
