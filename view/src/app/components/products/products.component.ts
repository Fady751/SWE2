import { Component, input, OnInit } from '@angular/core';
import { iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

    counter: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    categories: any[] = ['Plastic', 'Paper', 'Metal', 'Glass', 'Electronics', 'Organic Waste', 'Cloth'];


    decreaseCounter(i: number) {
        if(this.counter[i] > 0)
        this.counter[i]--;
    }
    increaseCounter(i: number) {
        this.counter[i]++;
    }
    filter(name: string): void {
        if(name === "all") {
            this.material = [...this.products];
            return;
        }
        this.material = this.products.filter((mat) => mat.categoryname === name);
    }

    products: any[] = [
        {
            "id": 1,
            "name": "Plastic Bottle",
            "categoryname": "Plastic",
            "recyclable": true,
            "url_photo": "/images/materials/plastic_bottle.jpg"
        },
        {
            "id": 2,
            "name": "Paper Bag",
            "categoryname": "Paper",
            "recyclable": true,
            "url_photo": "/images/materials/paper_bag.jpg"
        },
        {
            "id": 3,
            "name": "Aluminum Can",
            "categoryname": "Metal",
            "recyclable": true,
            "url_photo": "/images/materials/aluminum_can.jpg"
        },
        {
            "id": 4,
            "name": "Glass Bottle",
            "categoryname": "Glass",
            "recyclable": true,
            "url_photo": "/images/materials/glass_bottle.jpg"
        },
        {
            "id": 5,
            "name": "Laptop",
            "categoryname": "Electronics",
            "recyclable": false,
            "url_photo": "/images/materials/laptop.jpg"
        },
        {
            "id": 6,
            "name": "Apple Peel",
            "categoryname": "Organic Waste",
            "recyclable": false,
            "url_photo": "/images/materials/apple_peel.jpg"
        },
        {
            "id": 7,
            "name": "Plastic Straw",
            "categoryname": "Plastic",
            "recyclable": true,
            "url_photo": "/images/materials/plastic_straw.jpg"
        },
        {
            "id": 8,
            "name": "Charger",
            "categoryname": "Electronics",
            "recyclable": false,
            "url_photo": "/images/materials/charger.jpg"
        },
        {
            "id": 9,
            "name": "Metal Spoon",
            "categoryname": "Metal",
            "recyclable": true,
            "url_photo": "/images/materials/metal_spoon.jpg"
        },
        {
            "id": 10,
            "name": "Clothes",
            "categoryname": "Cloth",
            "recyclable": false,
            "url_photo": "/images/materials/clothes.jpg"
        },
    {
            "id": 11,
            "name": "Glass Jar",
            "categoryname": "Glass",
            "recyclable": true,
            "url_photo": "/images/materials/glass_jar.jpg"
    }
    ];

    material: any[] = [...this.products];
    ngOnInit() {
        
    }
}


