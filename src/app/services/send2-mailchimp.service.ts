import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Send2MailchimpService {

  constructor(private readonly http: HttpClient) { }

  // getUsers() {
  //   return this.http.get('https://randomuser.me/api/?results=25');
  // }

  postSectores(sectores: any){

    return this.http.post('http://localhost:3000/api/sb/pipe2mail/export', sectores);
  }

}
