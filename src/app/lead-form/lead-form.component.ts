import { Component, OnInit } from '@angular/core';
import {Lead} from './models/lead';

@Component({
  selector: 'app-lead-form',
  templateUrl: './lead-form.component.html',
  styleUrls: ['./lead-form.component.css']
})

export class LeadFormComponent implements OnInit {

  constructor() { }

  leadmodel = new Lead('Pradeepan', 'Dunsin Valley' , 'mspradeepan@gmail.com' , '4808426539' ,  'Nylon Prymid Tea');
  

  ngOnInit() {
  }

}
