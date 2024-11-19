import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.username && this.password) {
      // Simulación de login exitoso
      console.log('Login exitoso:', this.username);
      this.router.navigate(['/home']); // Redirige a la página principal
    } else {
      console.log('Por favor, completa los campos.');
    }
  }
}

