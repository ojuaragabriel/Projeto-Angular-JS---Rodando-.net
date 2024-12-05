import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {}
