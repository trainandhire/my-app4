import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from './job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private _httpClient:HttpClient) { }

  getJobs():Observable<Job[]>{
    return this._httpClient.get<Job[]>("/assets/jobs.json");
  }


}
