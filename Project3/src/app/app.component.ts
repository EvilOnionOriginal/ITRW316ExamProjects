import { Component } from '@angular/core';
import { RAMService } from './ram.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (
    private ramService: RAMService
  ) { }
  
  serverMemory: number;

  osMemory: number = 1024;
  frameSize: number = 4096;

  frames: string[] = [];

  chooseFrame: number = 0;

  currentFrame: number = 0;

  pageMessage: string = "Select a page number and click Check page."

  GetRAM() {
    this.serverMemory = null;
    this.ramService.getRAM().subscribe(val => {
      this.serverMemory = Math.round(val / 1048576);
    })
  }

  Initialize() {
    this.frames = [];
    this.currentFrame = 0;

    var available = this.serverMemory - this.osMemory;
    var numFrames = Math.floor(available * 1024 / this.frameSize);

    for (var i = 0; i < numFrames; i++) {
      this.frames.push("-");
    }
  }

  Randomize() {

    for (var i = 0; i < this.frames.length; i++)
    {
      var rnd: string = "-";
      do{
        rnd = Math.floor(Math.random() * this.frames.length * 2).toString();
      } while (this.frames.includes(rnd))
      this.frames[i] = rnd;
    }

  }

  CheckPage() {
    var index = this.frames.indexOf(this.chooseFrame.toString())

    if (index == -1) {
      this.frames[this.currentFrame] = this.chooseFrame.toString();
      this.pageMessage = "Page not found. Loaded in frame: " + this.currentFrame;

      this.currentFrame += 1;
      if (this.currentFrame == this.frames.length) {
        this.currentFrame = 0;
      }
    }
    else {
      this.pageMessage = "Page " + this.chooseFrame + " was found in frame: " + index;
    }

  }

}
