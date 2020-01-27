import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
employee: object[];

  constructor() { }

  ngOnInit() {
this.employee = [
  {id: 1001, name: 'Rahul', salary: 9000, department: 'JAVA'},
{id: 1002, name: 'Vikas', salary: 11000, department: 'ORAAPS'},
{id: 1003, name: 'Tambi', salary: 12000, department: 'JAVA'},
{id: 1004, name: 'Mank', salary: 25000, department: 'Oracle'},
{id: 1005, name: 'Roshi', salary: 5000, department: 'RoboMQ'},
{id: 1006, name: 'Shubibi', salary: 19000, department: 'JAVA'}
];
  }

}
