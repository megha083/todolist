import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title: string = 'my title';
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }
  
  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }

  keyPressAlpha(event: { keyCode: number; preventDefault: () => void; }) {

    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
}
