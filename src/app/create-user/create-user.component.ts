import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public userForm:FormGroup = new FormGroup({
    name: new FormControl("",[Validators.required, Validators.minLength(3)]),
    age: new FormControl("",[Validators.required, Validators.min(0),Validators.max(100)]),
    email: new FormControl("", [Validators.required, domainValidator]),
    phone: new FormControl(),
    address: new FormGroup({
      state: new FormControl("",[Validators.required]),
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
    this.userForm.markAllAsTouched();
    console.log(this.userForm.value);
  }


}



function domainValidator(control: AbstractControl): ValidationErrors | null{
  
  if(control.value.indexOf('@capgemini.com') == -1){
     return {'domainError':'use @capgemini.com at the end'}
  }
  else{
    return null
  }

}

