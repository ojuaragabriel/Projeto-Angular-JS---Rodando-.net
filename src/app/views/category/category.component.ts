import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { BurgerInterface } from '../../interfaces/burger-interface';
import { CategoryInterface } from '../../interfaces/category-interface';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CardComponent, ButtonComponent, CommonModule, RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  burgers: BurgerInterface[] = [];
  displayedBurgers: BurgerInterface[] = [];
  remainingBurgers: BurgerInterface[] = [];
  category: CategoryInterface | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  showAll = false;

  // Função para exibir todas as categorias
  showFullMenu() {
    this.showAll = true;
  }

  // Voltar a exibir apenas as 3 primeiras categorias
  showLess() {
    this.showAll = false;
  }

  constructor(private apiService: ApiService) {
    // Obtém o id da categoria da URL
    const id = Number(this.route.snapshot.params['id']);

    // Obtém os hamburgueres da categoria
    this.apiService.getCategoryById(id).subscribe((category) => {
      if (category) {
        this.category = category;
        this.burgers = category.products;
        // Atualizar os hamburgueres exibidos e restantes
        this.displayedBurgers = this.burgers.slice(0, 3);
        this.remainingBurgers = this.burgers.slice(3);
      }
    });
  }
}