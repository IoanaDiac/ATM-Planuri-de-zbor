import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Zbor} from '../models/zbor';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ZborService{
  private url = 'http://localhost:8080/zboruri';

  constructor(private http: HttpClient) {
  }

  getZboruri(): Observable<Zbor[]> {
    return this.http.get<Zbor[]>(this.url).pipe(
      map(response => response)
    );
  }

  saveZbor(zbor: Zbor): Observable<Zbor> {
    return this.http.post<Zbor>(this.url, zbor);
  }

  getZbor(id: number): Observable<Zbor>{
    return this.http.get<Zbor>(`${this.url}/${id}`).pipe(
      map(response => response)
    );
  }

  deleteZbor(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`, {responseType: 'text'});
  }
}
