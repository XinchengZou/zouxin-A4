import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  breakfast: Array<Object>;
  dinner: Array<Object>;
  lunch: Array<Object>;

  constructor(http: HttpClient) {
    http.get('../../assets/breakfast.json').subscribe((data: any) => {
      this.breakfast = data;
    });

    http.get('../../assets/dinner.json').subscribe((data: any) => {
      this.dinner = data;
    });

    http.get('../../assets/lunch.json').subscribe((data: any) => {
      this.lunch = data;
    });
  }

  ngOnInit(): void {
  }

}
