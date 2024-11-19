import { Component, Input, OnInit } from '@angular/core';
import { usuario } from '../usuarios/usuarios.model';
import { LoadingController, ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { AddUsuarioPage } from '../add-usuario/add-usuario.page';
import { UsuariosService } from '../services/usuarios.service';
import { take } from 'rxjs';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent  implements OnInit {
  @Input()
  usuario!: usuario;

  constructor(
    private modalCtrl: ModalController, 
    private loadigCtrl: LoadingController,
    private usuarioService: UsuariosService
  ){}

  ngOnInit() {}

  closeModal(role = 'actualizar'){
    this.modalCtrl.dismiss(this.usuario, role);
  }

  async openeditModal(){
    const modal = await this.modalCtrl.create({
      component : AddUsuarioPage,
      componentProps: {usuario:this.usuario}
    });

    await modal.present();

    const { data: updateUsuario } = await modal.onDidDismiss();
    if (updateUsuario){
      this.usuario = updateUsuario;
    }
  }
  async onDeleteUsuario(){
    const loading = await this.loadigCtrl.create({message: 'Eliminando...'});
    loading.present();
    this.usuarioService
    .deleteUsuario(this.usuario.id)
    .pipe(take(1))
    .subscribe(() =>{
      loading.dismiss();
      this.closeModal('Eliminar');
    });
  }
}
