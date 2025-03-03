import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fallback',
  imports: [CommonModule, RouterModule],
  templateUrl: './fallback.component.html',
  styleUrl: './fallback.component.scss'
})
export class FallbackComponent {

}
