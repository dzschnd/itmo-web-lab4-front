import {Component} from '@angular/core'
import {UserService} from '../../services/user.service'
import {ButtonModule} from 'primeng/button'
import {InputTextModule} from 'primeng/inputtext'
import {RouterLink} from '@angular/router'
import {RippleModule} from 'primeng/ripple'
import {FormsModule, NgForm} from '@angular/forms'
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        ButtonModule,
        InputTextModule,
        RouterLink,
        RippleModule,
        FormsModule,
        NgOptimizedImage
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService) { }
  onSubmit(form: NgForm) {
    const {username, password} = form.value
    this.userService.login(username, password)
  }
}
