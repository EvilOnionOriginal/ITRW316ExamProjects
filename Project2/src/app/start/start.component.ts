import { Component, OnInit } from '@angular/core';
import { Process } from '../process.model'
import { ProcessesService } from '../processes.service'
import { Router } from "@angular/router"

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(
    private processService: ProcessesService,
    private router: Router
    ) { }

  currentUser: string = "";

  processes: Process[] = [];

  ngOnInit() {

  }

  AddNewProcess(): void {
    this.processes.push(new Process())
  }

  Submit(): void {
    this.processes.forEach(p => {
      p.User = this.currentUser;
    })
    this.processService.setProcesses(this.currentUser, this.processes).subscribe(() => {
      console.log("Done");
    });
    this.router.navigate(["schedule/" + this.currentUser]);
  }

}
