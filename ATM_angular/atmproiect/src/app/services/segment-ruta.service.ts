import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SegmentRuta} from '../models/segmentRuta';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SegmentRutaService{
  private url = 'http://localhost:8080/segmenteruta';

  constructor(private http: HttpClient) {
  }

  getSegmenteRuta(): Observable<SegmentRuta[]> {
    return this.http.get<SegmentRuta[]>(this.url).pipe(
      map(response => response)
    );
  }

  saveSegmentRuta(segmentRuta: SegmentRuta): Observable<SegmentRuta> {
    return this.http.post<SegmentRuta>(this.url, segmentRuta);
  }

  getSegmentRuta(id: number): Observable<SegmentRuta>{
    return this.http.get<SegmentRuta>(`${this.url}/${id}`).pipe(
      map(response => response)
    );
  }

  deleteSegmentRuta(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`, {responseType: 'text'});
  }
}
