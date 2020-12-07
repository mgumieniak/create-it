import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Cv} from './data';


@Injectable({
  providedIn: 'root',
})
export class RestClientService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl =
      environment.backend.url +
      ':' +
      environment.backend.port +
      environment.backend.prefix;
  }

  get(cvId: string): Observable<Cv> {
    return this.http
      .get<Cv>(this.baseUrl + `/cvs/` + cvId)
      .pipe(
        tap((cv) => {
          console.log('GET data:');
          console.log(cv);
        }),
        catchError(this.handleError<Cv>('getCV')));
  }

  update(cv: Cv): Observable<Cv> {
    return this.http
      .patch<Cv>(this.baseUrl + '/cvs/1', cv)
      .pipe(
        tap((it) => {
          console.log('PATCH data:');
          console.log(it);
        }),
        catchError(this.handleError<Cv>('Update CV'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error}`);
      return of(result as T);
    };
  }
}
