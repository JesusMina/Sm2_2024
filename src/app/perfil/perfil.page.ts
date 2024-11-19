import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UsuariosService } from '../services/usuarios.service';
import { Observable } from 'rxjs';
import { usuario } from '../usuarios/usuarios.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuarios$!: Observable<usuario[]>; // Lista de usuarios
  selectedUser: usuario | null = null; // Usuario seleccionado

  constructor(
    private navCtrl: NavController,
    private usuariosService: UsuariosService
  ) {}

  ngOnInit() {
    // Carga los usuarios desde el servicio
    this.usuarios$ = this.usuariosService.getusuarios();
  }

  goBack() {
    this.navCtrl.navigateBack('/home'); // Vuelve a la página Home
  }

  selectUser(user: usuario) {
    this.selectedUser = { ...user }; // Carga los datos del usuario seleccionado
  }

  deselectUser() {
    this.selectedUser = null; // Regresa a la lista de usuarios
  }

  saveChanges() {
    if (this.selectedUser) {
      // Llama al servicio con el ID del usuario y el objeto actualizado
      this.usuariosService.updateUsuario(this.selectedUser.id, this.selectedUser).subscribe(() => {
        alert('Cambios guardados correctamente.');
        this.deselectUser();
      }, (error) => {
        console.error('Error al guardar los cambios:', error);
        alert('Ocurrió un error al guardar los cambios.');
      });
    }
  }
  
}
