import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToastModule} from 'primeng/toast'
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ToastModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab4';
}
