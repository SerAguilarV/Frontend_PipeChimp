import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Deal } from '../models/deal.model';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string = environment.BASE_API_URL;

  constructor(private readonly http: HttpClient) {}

  public getDeal(numDeal: string) {
    return this.http.get<Deal>(this.baseUrl + 'deals/' + numDeal);

  }
}
