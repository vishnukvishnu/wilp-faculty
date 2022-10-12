import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SlideMenuService {
  private user = new BehaviorSubject('');
  cast = this.user.asObservable();
  constructor() { }

  editUser(newUser) {
    this.user.next(newUser);
  }
}
