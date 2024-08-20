//  ng generate service service\api\api
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from '../../Constants/constant';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get<T>(URL:string):Observable<T> {
    return this.http.get<T>(Constant.API_URL+URL);
  };

  post<T> (URL: string,body:any) : Observable<T>{
    return this.http.post<T>(Constant.API_URL+URL,body)
  } 

  put<T> (URL: string,body:any) : Observable<T>{
    return this.http.put<T>(Constant.API_URL+URL,body)
  } 

  delete<T> (URL: string) : Observable<T>{
    return this.http.delete<T>(Constant.API_URL+URL)
  } 
}
