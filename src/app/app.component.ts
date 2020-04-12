import { Component } from '@angular/core';
import { ZouXin } from './zouxin';
import { InformationService } from './information.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public info: ZouXin;

  constructor(informationService: InformationService) {
    this.info = informationService.getInfo();
  }
}
