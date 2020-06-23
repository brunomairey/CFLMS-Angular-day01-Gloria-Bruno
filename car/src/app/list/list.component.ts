import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

	addCar = new FormGroup({
		name: new FormControl('',Validators.required),
		year: new FormControl('',Validators.required),
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
  }

}
