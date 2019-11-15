import { Injectable } from '@angular/core';
import { Alert } from "./../classes/alert";
import { Subject } from 'rxjs';

@Injectable()
export class AlertService {

  public alerts: Subject<Alert> = new Subject();

  constructor() { }
}
