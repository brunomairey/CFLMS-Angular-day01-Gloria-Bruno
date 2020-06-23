import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

cars = [{
	name: "Tesla", year: 2010, image: "./assets/tesla.jpg"},
	{name: "Mercedes", year: 2011, image: "./assets/mercedes.jpg"},
	{name: "Peugeot", year: 2012, image: "./assets/peugeot.jpg"},
	{name: "Fiat", year: 2013, image: "./assets/fiat.jpg"}, 
	{name: "Skoda", year: 2014, image: "./assets/skoda.jpg"},
	{name: "Seat", year:2015, image: "./assets/seat.jpg"}]


  constructor() { }

  ngOnInit(): void {
  }

}
