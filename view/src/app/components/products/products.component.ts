import { Component, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

    counter: number[] = [];
    categories: any[] = [];


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

    products: any[] = []
    material: any[] = [];
    
    async ngOnInit() {
        const res = await fetch('http://localhost:3000/getmaterial');
        
        const data = await res.json();
        this.products = this.material = data.result;
        this.counter = Array(this.products.length).fill(0);

        const res2 = await fetch('http://localhost:3000/getcategories');
        
        const data2 = await res2.json();
        this.categories = data2.result;
    }
}


