import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [ButtonComponent, RouterModule],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css',
})
export class NotFoundComponent {}
