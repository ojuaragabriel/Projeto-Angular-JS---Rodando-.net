import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CategoryInterface } from '../../interfaces/category-interface';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CardComponent, ButtonComponent, CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  categories: CategoryInterface[] = [];
  displayedCategories: CategoryInterface[] = [];
  remainingCategories: CategoryInterface[] = [];
  showAll = false;

  // Função para exibir todas as categorias
  showFullMenu() {
    this.showAll = true;
  }

  // Voltar a exibir apenas as 3 primeiras categorias
  showLess() {
    this.showAll = false;
  }

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Obtém todas as categorias
    this.apiService.getCategories().subscribe((categories) => {
      this.categories = categories;
      // Atualizar as categorias exibidas e restantes
      this.displayedCategories = this.categories.slice(0, 3);
      this.remainingCategories = this.categories.slice(3);
    });
  }
}