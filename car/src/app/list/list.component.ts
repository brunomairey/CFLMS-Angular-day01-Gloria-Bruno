import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

	addCar = new FormGroup({
		name: new FormControl('',Validators.minLength(2)),
		year: new FormControl('',Validators.minLength(4)),
		details: new FormControl('',Validators.required)
	});

  constructor() { }

  ngOnInit(): void {
  }

	newCars = [];

  onSubmit(){

    if(this.addCar.valid){
      this.newCars.push(this.addCar.value);
   }
   else{
   	document.getElementById("error").innerHTML= "Error. Not enough information."
   }
  }

}
