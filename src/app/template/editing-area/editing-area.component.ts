import { Component, OnInit, Input } from '@angular/core';
import { EeitingAreaItem } from '../editing-area-item/eiting-area-item.model';


@Component({
  selector: 'bl-editing-area',
  templateUrl: './editing-area.component.html',
  styleUrls: ['./editing-area.component.css']
})
export class EditingAreaComponent implements OnInit {
  @Input() public items: EeitingAreaItem[];
  @Input() public insertDataTmp: any;

  constructor() { }

  ngOnInit() {
  }

}
