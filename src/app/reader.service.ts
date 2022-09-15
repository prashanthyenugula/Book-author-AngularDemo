import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL_TO_ADD_READER ="http://localhost:8088/saveReader";
const BASE_URL_TO_GET_READERS ="http://localhost:8088/getAllReaders";


@Injectable({
  providedIn: 'root'
})
export class ReaderService {

  getReaders(){
    return this.http.get(BASE_URL_TO_GET_READERS)
  }

  saveReader(reader:{
    name:string;
    emailId:string;
    phone:string;
    password:string;
    type:string;
}){
  return this.http.post(BASE_URL_TO_ADD_READER,reader);
}

  constructor(public http: HttpClient) { }
}
