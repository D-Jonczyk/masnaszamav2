import {Injectable} from '@angular/core';
import {ClientPanel} from './client-panel';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientPanelService {
  clientName:string;
  accImgLink:string;
  constructor(private http: HttpClient) {
  }



}
