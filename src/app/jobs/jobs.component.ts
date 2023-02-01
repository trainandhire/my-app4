import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  public jobs:Job[] = [];

  constructor(private _jobsService:JobsService) {

    this._jobsService.getJobs().subscribe(
      (data:Job[])=>{
        this.jobs = data;
      },
      (err:any)=>{

      }
    )

   }

  ngOnInit(): void {
  }

}
