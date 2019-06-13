import { Component, OnInit } from '@angular/core';
import { ProcessesService } from '../processes.service';
import { Process } from '../process.model';
import { ActivatedRoute } from '@angular/router';
import { ScheduleInfo } from '../scheduleinfo.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  currentUser: string = "";

  processes: Process[] = [];

  timeQuantum1: number = 1;
  timeQuantum2: number = 2;
  timeQuantum3: number = 3;

  processRan: string[] = [];

  scheduleMessage: string;

  private sub: any;

  constructor(
    private processService: ProcessesService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.currentUser = params['userName'];
    });

  }

  LoadProcesses()
  {
    this.processService.getProcesses(this.currentUser)
    .subscribe(res => {
      this.processes = [];
      res.forEach((val) => {
        this.processes.push(val);
      })
    })
  }

  ShowSchedule()
  {
    var scheduleInfo = new ScheduleInfo();
    scheduleInfo.q1 = this.timeQuantum1;
    scheduleInfo.q2 = this.timeQuantum2;
    scheduleInfo.q3 = this.timeQuantum3;
    scheduleInfo.Processes = this.processes;

    this.processService.getSchedule(scheduleInfo).subscribe(val => {
      this.scheduleMessage = val;
    });
  }

}
