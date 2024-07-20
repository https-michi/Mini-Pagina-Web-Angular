import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { IProduct } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule]
})
export class ProductsComponent implements OnInit {
  productList: IProduct[] = [];
  loading: boolean = true; 
  private _apiService = inject(ApiService);
  private _router = inject(Router);

  ngOnInit(): void {
    setTimeout(() => { 
      this._apiService.getProducts().subscribe((data: IProduct[]) => {
        this.productList = data;
        this.loading = false; 
      });
    }, ) ; //2000 ); 
  }

  navegate(id: number): void {
    this._router.navigate(['/products', id]);
  }
}
