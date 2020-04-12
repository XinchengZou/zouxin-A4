import { Injectable } from '@angular/core';
import { ZouXin } from './zouxin';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor() { }

  getInfo() { return new ZouXin(); }
}
