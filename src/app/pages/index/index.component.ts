import {Component, inject} from '@angular/core'
import {UserService} from '../../services/user.service'
import {ButtonModule} from 'primeng/button'
import {RouterLink} from '@angular/router'
import {RippleModule} from 'primeng/ripple'
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    ButtonModule,
    RouterLink,
    RippleModule,
    NgOptimizedImage
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  protected userService = inject(UserService)
}
