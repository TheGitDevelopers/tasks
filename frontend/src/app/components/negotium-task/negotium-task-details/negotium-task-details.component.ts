import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  name;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
      // this.http
      //   .get(`http://localhost:9000/api/getName/${this.name}`)
      //   .subscribe(data => {
      //     this.task = { ...this.task, ...data };
      //   });
    });
  }
}
