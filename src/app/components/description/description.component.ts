import { Component, Input } from '@angular/core';
import { BurgerInterface } from '../../interfaces/burger-interface';
import { ButtonComponent } from '../button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [ButtonComponent, RouterModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css',
})
export class DescriptionComponent {
  @Input() burgerData?: BurgerInterface;
}
