import { Component, OnInit, Input } from '@angular/core';
import { ZouXin } from '../zouxin';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() info: ZouXin;

  constructor() { }

  ngOnInit(): void {
  }

}
