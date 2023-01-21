import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent{

  public age:number = 20;
  public name:string = "Abc";
  public isIndian:boolean = true;

  public phone:number = 123;

  test(){
    alert("button clicked");
  }

  test2(){
    alert("button double clicked");
  }

  test3(){
    alert("mouse entered.")
  }

  test4(){
    alert("mouse leaved.")
  }

  test5(){
    alert("key pressed")
  }


}
