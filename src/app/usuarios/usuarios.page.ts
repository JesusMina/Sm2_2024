import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { LoadingController, ModalController, NavController } from '@ionic/angular'; // Importa NavController
import { Observable } from 'rxjs';
import { usuario } from './usuarios.model';
import { map, tap } from "rxjs/operators";
import { DetallesComponent } from '../detalles/detalles.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  usuarios$!: Observable<usuario[]>;
  usuario: any;

  constructor(
    private usuariosService: UsuariosService, 
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private navCtrl: NavController // Añade NavController al constructor
  ) {}

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({ message: 'Loading...' });
    loading.present();

    this.usuarios$ = this.usuariosService.getusuarios().pipe(
      tap(usuarios => {
        loading.dismiss();
        return usuarios;
      })
    );
  }

  goBack() {
    this.navCtrl.navigateBack('/home'); // Navega a la página Home
  }

  async openDetallesModal(usuario: usuario) {
    const modal = await this.modalCtrl.create({
      component: DetallesComponent,
      componentProps: { usuario },
    });

    await modal.present();

    const { data: updateUsuario, role } = await modal.onDidDismiss();
    if (updateUsuario && role === 'Actualizar') {
      this.usuarios$ = this.usuarios$.pipe(
        map((usuarios: any[]) => {
          usuarios.forEach((prod: { id: any }) => {
            if (prod.id === updateUsuario.id) {
              prod = updateUsuario;
            }
            return prod;
          });
          return usuarios;
        })
      );
    }
    if (role === 'Eliminar') {
      this.usuarios$ = this.usuarios$.pipe(
        map((usuarios: any[]) => {
          usuarios = usuarios.filter(prod => prod.id !== updateUsuario.id);
          return usuarios;
        })
      );
    }
  }
}
