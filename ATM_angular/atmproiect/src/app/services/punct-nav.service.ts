import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PunctNav} from '../models/punctNav';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PunctNavService{
  private url = 'http://localhost:8080/punctenav';

  constructor(private http: HttpClient) {
  }

  getPuncteNav(): Observable<PunctNav[]> {
    return this.http.get<PunctNav[]>(this.url).pipe(
      map(response => response)
    );
  }

  savePunctNav(punctNav: PunctNav): Observable<PunctNav> {
    return this.http.post<PunctNav>(this.url, punctNav);
  }

  getPunctNav(id: number): Observable<PunctNav>{
    return this.http.get<PunctNav>(`${this.url}/${id}`).pipe(
      map(response => response)
    );
  }

  deletePunctNav(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`, {responseType: 'text'});
  }
}
