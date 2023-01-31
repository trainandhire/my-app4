import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public userForm:FormGroup = new FormGroup({
    name: new FormControl("",[Validators.required, Validators.minLength(3)]),
    age: new FormControl("",[Validators.required, Validators.min(0),Validators.max(100)]),
    phone: new FormControl(),
    address: new FormGroup({
      state: new FormControl(),
      pin: new FormControl("",[Validators.required, Validators.min(100000),Validators.max(999999)])
    }),
    type:new FormControl(),
    busFee: new FormControl(),
    hostelFee: new FormControl(),
    cards: new FormArray([])
  })

  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }

  add(){
    this.cardsFormArray.push(
      new FormGroup({
        cardNo: new FormControl(),
        expiry: new FormControl(),
        cvv: new FormControl("", [Validators.required, Validators.min(100),Validators.max(999)])
      })
    )
  }

  delete(i:any){
    this.cardsFormArray.removeAt(i);
  }

  submit(){
    console.log(this.userForm.value);
  }


}
