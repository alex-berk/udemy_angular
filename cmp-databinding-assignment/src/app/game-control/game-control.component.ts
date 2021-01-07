import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  num: number = 0;
  gameActive: boolean;
  @Output () emitStuff = new EventEmitter<{num: number}>();

  constructor() {  }

  startGame() {
    this.gameActive = true;
  }
  stopGame() {
    this.gameActive = false;
  }

  increaseNum() {
    this.num += 1
    this.emitStuff.emit({num: this.num})
  }

  ngOnInit(): void { 
    setInterval(() => {
      if (this.gameActive) {
        this.increaseNum()
      }
    }, 1000)
  }

}
