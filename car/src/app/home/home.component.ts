import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

cars = [{
	name: "tesla", year: 2010, image: "./assets/tesla.jpg"},
	{name: "mercedes", year: 2011, image: "./assets/mercedes.jpg"},
	{name: "peugeot", year: 2012, image: "./assets/peugeot.jpg"},
	{name: "fiat", year: 2013, image: "./assets/fiat.jpg"}, 
	{name: "skoda", year: 2014, image: "./assets/skoda.jpg"},
	{name: "seat", year:2015, image: "./assets/seat.jpg"}]


  constructor() { }

  ngOnInit(): void {
  }

}
