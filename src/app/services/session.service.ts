import {HttpClient} from '@angular/common/http';    
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  public todayData(): Observable <any> {
    return this.http.get("./assets/Json/todaySessiodata.json");
  }
 
  public upcommingData(): Observable <any> {
    return this.http.get("./assets/Json/upcommingData.json");
  }

  public historyData(): Observable <any> {
    return this.http.get("./assets/Json/historyData.json");
  }
  public cancelData(): Observable <any> {
    return this.http.get("./assets/Json/cancelData.json");
  }
}
