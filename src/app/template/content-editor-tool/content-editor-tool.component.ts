import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bl-content-editor-tool',
  templateUrl: './content-editor-tool.component.html',
  styleUrls: ['./content-editor-tool.component.css']
})
export class ContentEditorToolComponent implements OnInit {
  @Input() public toolConfigure: any;
  @Output() public clickBtns: EventEmitter<any> = new EventEmitter();
  @Output() public deleteTems: EventEmitter<any> = new EventEmitter();
  @Output() public setContents: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  clickBtn(e: any) {
    this.clickBtns.emit(e);
  }
  deleteTem() {
    this.deleteTems.emit();
  }
  setContent(content: any) {
    this.setContents.emit(content);
  }
}
