import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BurgerInterface } from '../../interfaces/burger-interface';
import { DescriptionComponent } from '../../components/description/description.component';

@Component({
  selector: 'app-burger-details',
  standalone: true,
  imports: [RouterModule, DescriptionComponent],
  templateUrl: './burger-details.component.html',
  styleUrl: './burger-details.component.css',
})
export class BurgerDetailsComponent {
  burger: BurgerInterface | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  apiService: ApiService = inject(ApiService);

  constructor() {
    // Obtém o id do hamburguer da URL
    const id = Number(this.route.snapshot.params['id']);

    // Obtém os detalhes do hamburguer
    this.apiService.getProductById(id).subscribe((burger) => {
      this.burger = burger;
    });
  }
}