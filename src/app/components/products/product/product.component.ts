import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
@Input() singleproduct:any={}

showextended=true
  customStyle={}
  currentStyles={}

  constructor(){} 
  
  
  setShowExtended(){
    this.showextended=!this.showextended
    this.setCurrentStyles()
    console.log(this.showextended)
  }
  
  setCurrentStyles(){
    console.log(this.showextended)
    this.currentStyles={
      'padding-top':this.showextended ? '0' : '60px',
      'color':this.showextended ? 'red' :'blue'
    }
  }
  products=[{
    id:1,
    title:"TShirt",
    description:"100% Cotton T-Shirt with anti microbial treatment and ultra fresh treatment. Odour free tshirt.Due to the different monitor and light effect, the actual color maybe a slight  different from the picture color. WASHCARE: Wash separately with mild detergent and dry inside out",
    category:"Men's Showroom",
    image:"https://m.media-amazon.com/images/I/61sYJlaT+OL._UY741_.jpg",
    price:900,
    promotion:true
  },
  {
    id:2,
    title:"HandBag",
    description:"Due to the different monitor and light effect, the actual color maybe a slight  different from the picture color. WASHCARE: Wash separately with mild detergent and dry inside out",
    category:"Men's Showroom",
    image:"https://m.media-amazon.com/images/I/71Fn+A6IekS._AC_UL320_.jpg",
    price:1900,
    promotion:false
  },
  {
    id:3,
    title:"Jacket",
    description:"100% Cotton T-Shirt with anti microbial treatment and ultra fresh treatment. Odour free tshirt.Due to the different monitor and light effect, the actual color maybe a slight  different from the picture color. WASHCARE: Wash separately with mild detergent and dry inside out",
    category:"Men's Showroom",
    image:"https://m.media-amazon.com/images/I/51DH-4lQviL.jpg",
    price:2000,
    promotion:true
  },
  {
    id:34,
    title:"Ring",
    description:"Artificial Finger ring for Casual Outings; Stone- Cubic Zirconia, Stone Color- White, Metal - Brass",
    category:"Men's Showroom",
    image:"https://m.media-amazon.com/images/I/71zKvf7SrsL._AC_UL320_.jpg",
    price:2000,
    promotion:false
  },
  ]

}
