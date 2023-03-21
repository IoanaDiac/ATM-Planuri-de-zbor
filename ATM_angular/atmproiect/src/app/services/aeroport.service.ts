import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Aeroport} from '../models/aeroport';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AeroportService{
  private url = 'http://localhost:8080/aeroporturi';
  constructor(private http: HttpClient) {
  }

  getAeroporturi(): Observable<Aeroport[]> {
    return this.http.get<Aeroport[]>(this.url).pipe(
      map(response => response)
    );
  }

  saveAeroport(aeroport: Aeroport): Observable<Aeroport> {
    return this.http.post<Aeroport>(this.url, aeroport);
  }

  getAeroport(id: number): Observable<Aeroport>{
    return this.http.get<Aeroport>(`${this.url}/${id}`).pipe(
      map(response => response)
    );
  }

  deleteAeroport(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`, {responseType: 'text'});
  }
}
