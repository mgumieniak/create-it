import { Injectable } from '@angular/core';
import {RestClientService} from '../../../model/rest-client.service';
import {multiScan} from 'rxjs-multi-scan';
import {Observable, Subject} from 'rxjs';
import {Cv} from '../../../model/data';

@Injectable({
  providedIn: 'root'
})
export class CvStateService {
  private cvUpdate: Subject<Cv> = new Subject();

  private cv$: Observable<Cv> = multiScan(
    this.restClient.get('1'),
    (oldCV, uploadedCV) => (oldCV = uploadedCV),
    this.cvUpdate,
    (oldCV, uploadedCV) => (oldCV = uploadedCV),
    {} as Cv
  );

  constructor(private restClient: RestClientService) {
  }

  public updateGivenCv(cv: Cv): void {
    this.cvUpdate.next(cv);
  }

  public getCV(): Observable<Cv> {
    return this.cv$;
  }
}
