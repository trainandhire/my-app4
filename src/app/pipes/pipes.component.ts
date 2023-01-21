import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name:string = "Asdf";
  public date:any = new Date();

  public user:any = {name:'asdf',age:20};

  constructor() { }

  ngOnInit(): void {
  }

}
