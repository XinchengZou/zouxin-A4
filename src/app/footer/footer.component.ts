import { Component, OnInit, Input } from '@angular/core';
import { ZouXin } from '../zouxin';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() info: ZouXin;

  constructor() { }

  ngOnInit(): void {
  }

}
