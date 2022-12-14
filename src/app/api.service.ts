import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchcorona=()=>{
    return this.http.get("https://api.covidtracking.com/v1/us/daily.json")
  }
}
