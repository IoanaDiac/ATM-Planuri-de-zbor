import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PlanZbor} from '../models/planZbor';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanZborService{
  private url = 'http://localhost:8080/planurizbor';

  constructor(private http: HttpClient) {
  }

  getPlanuriZbor(): Observable<PlanZbor[]> {
    return this.http.get<PlanZbor[]>(this.url).pipe(
      map(response => response)
    );
  }

  savePlanZbor(planZbor: PlanZbor): Observable<PlanZbor> {
    return this.http.post<PlanZbor>(this.url, planZbor);
  }

  getPlanZbor(id: number): Observable<PlanZbor>{
    return this.http.get<PlanZbor>(`${this.url}/${id}`).pipe(
      map(response => response)
    );
  }

  deletePlanZbor(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`, {responseType: 'text'});
  }
}
