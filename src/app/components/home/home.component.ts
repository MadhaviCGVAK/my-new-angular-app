import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  message='Learning Angular Property Binding Basics'

  users=[
    {
      firstName:'madhavi',
      lastName:'latha',
      age:30,
      address:{
        door:402,
        street:'marathalli',
        city:'Bangalore'
      },
      image:'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68', 
    },
    {
      firstName:'modi',
      lastName:'vamika',
        address:{
        door:4021,
        street:'marathalli',
        city:'chennai'
      },
      image:'https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8', 
    },
    {
      firstName:'modi',
      lastName:'ramesh',
      age:30,
      address:{
        door:4022,
        street:'marathalli',
        city:'hyd'
      },
      image:'https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM', 
    }
  ]



constructor(){ }

ngOnInit(): void {  
}

// //message='I am a new home component'
// product='Lenova Laptop'

// dynamicBackground='blueTheme'

// enabled=false;

// ngOnInit(): void {  
// }

// getResponse()
// {
// return (10*20) + 1 + 3
// }

// products=[
// {
//   name: 'Mouse',
//   price: 123,
//   brand: 'HP'
// },
// {
//   name: 'Laptop',
//   price: 123456,
//   brand: 'DELL'
// },
// {
//   name: 'Wirelss Mouse',
//   price: 123,
//   brand: 'Lenova'
// }
// ]

// updateProduct(){
//   console.log("Product update")
// }

// enableButton()
// {
// this.dynamicBackground=='redTheme'
// }

// enableRed(){
//   this.dynamicBackground=='redTheme'
// }

// enableBlue(){
//   this.dynamicBackground=='BlueTheme'
// }


}
