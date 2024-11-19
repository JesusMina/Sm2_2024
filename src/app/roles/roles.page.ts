import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.page.html',
  styleUrls: ['./roles.page.scss'],
})
export class RolesPage {
  roles: string[] = ['Administrador', 'Estudiante', 'Docente'];

  constructor(
    private alertController: AlertController,
    private navCtrl: NavController
  ) {}

  goBack() {
    this.navCtrl.navigateBack('/home'); // Cambia '/home' según tu ruta principal
  }

  async addRole() {
    const alert = await this.alertController.create({
      header: 'Agregar Nuevo Rol',
      inputs: [
        {
          name: 'newRole',
          type: 'text',
          placeholder: 'Nombre del nuevo rol',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Agregar',
          handler: (data) => {
            if (data.newRole) {
              this.roles.push(data.newRole);
            }
          },
        },
      ],
    });

    await alert.present();
  }

  async editRole(role: string) {
    const alert = await this.alertController.create({
      header: 'Editar Rol',
      inputs: [
        {
          name: 'roleName',
          type: 'text',
          placeholder: 'Nombre del rol',
          value: role,
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Guardar',
          handler: (data) => {
            const index = this.roles.indexOf(role);
            if (index > -1 && data.roleName) {
              this.roles[index] = data.roleName;
            }
          },
        },
      ],
    });

    await alert.present();
  }

  deleteRole(role: string) {
    const index = this.roles.indexOf(role);
    if (index > -1) {
      this.roles.splice(index, 1);
    }
  }
}




