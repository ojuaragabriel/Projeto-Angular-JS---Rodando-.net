import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BurgerInterface } from '../interfaces/burger-interface';
import { CategoryInterface } from '../interfaces/category-interface';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Rota para buscar todos os produtos
  public getProducts(): Observable<BurgerInterface[]> {
    return this.http
      .get<{ message: string; products: BurgerInterface[] }>(
        `${this.baseUrl}/product`
      )
      .pipe(map((response) => response.products));
  }

  // Rota para buscar um produto pelo id
  public getProductById(id: number): Observable<BurgerInterface> {
    return this.http
      .get<{ message: string; product: BurgerInterface }>(
        `${this.baseUrl}/product/${id}`
      )
      .pipe(map((response) => response.product));
  }

  // Rota para buscar todas as categorias
  public getCategories(): Observable<CategoryInterface[]> {
    return this.http
      .get<{ message: string; categories: CategoryInterface[] }>(
        `${this.baseUrl}/category`
      )
      .pipe(map((response) => response.categories));
  }

  // Rota para buscar uma categoria pelo id
  public getCategoryById(id: number): Observable<CategoryInterface> {
    return this.http
      .get<{ message: string; category: CategoryInterface }>(
        `${this.baseUrl}/category/${id}`
      )
      .pipe(map((response) => response.category));
  }

  // Rota para criar um pedido
  async createOrder(order: any): Promise<void> {
    await fetch(`${this.baseUrl}/order`, {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}