import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MenuComponent } from './views/menu/menu.component';
import { NotFoundComponent } from './views/notfound/notfound.component';
import { CategoryComponent } from './views/category/category.component';
import { BurgerDetailsComponent } from './views/burger-details/burger-details.component';
import { OrderComponent } from './views/order/order.component';

export const routes: Routes = [
  {
    // Rota que leva à página inicial
    path: '',
    component: HomeComponent,
    title: 'Projeto Final - Burguer Mania',
  },
  {
    // Rota que leva ao cardápio
    path: 'menu',
    component: MenuComponent,
    title: 'Burguer Mania - Menu',
  },
  {
    // Rota para exibir os hambúrgueres de uma categoria específica
    path: 'category/:id',
    component: CategoryComponent,
    title: 'Burguer Mania - Categorias',
  },
  {
    // Rota que exibe os detalhes de um hambúrguer específico
    path: 'burgers/:id',
    component: BurgerDetailsComponent,
    title: 'Burguer Mania - Detalhes',
  },
  {
    // Rota para a página de pedidos
    path: 'order',
    component: OrderComponent,
    title: 'Burguer Mania - Pedidos',
  },
  {
    // Rota para exibir uma página de erro caso a rota não seja encontrada
    path: '**',
    component: NotFoundComponent,
    title: 'Página não encontrada',
  },
];
