import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIconsModule],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.scss"
})
export class AboutComponent { }
