import {HttpClient} from '@angular/common/http';    
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttandanceService {

  constructor(private http: HttpClient) { }

  public presentData(): Observable <any> {
    return this.http.get("./assets/Json/present.json");
  }
  public absentData(): Observable <any> {
    return this.http.get("./assets/Json/absent.json");
  }
}


