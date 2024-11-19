import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable, take } from 'rxjs';
import { NavController } from '@ionic/angular';
import { usuario } from '../usuarios/usuarios.model';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {
goBack() {
throw new Error('Method not implemented.');
}
agregarUsuario() {
throw new Error('Method not implemented.');
}
  @Input() usuario!: usuario;
  isEditMode = false;
  form!: FormGroup;

  constructor(
    private usuariosService: UsuariosService, 
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private modalCtrl : ModalController){}

  
  ngOnInit() {
    this.initAddUsuarioForm();

    if (this.usuario){
      this.isEditMode = true; 
      this.setFormValues();
    }

  }

  initAddUsuarioForm(){
    this.form = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      apellido: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      imageUrl: new FormControl(null, [Validators.required]),
    });
  }

  setFormValues(){
    this.form.setValue({
        nombre: this.usuario.nombre,
        apellido: this.usuario.apellido,
        email: this.usuario.email,
        password: this.usuario.password,
        imageUrl: this.usuario.imageUrl
    });

    this.form.updateValueAndValidity();
  }

  closeModal(data = null){
    this.modalCtrl.dismiss(data);
  }

  async submitUsuario(){
    const Loading = await this.loadingCtrl.create({message: 'Loading... '})
    Loading.present();

    let response: Observable<usuario>;
    
    if (this.isEditMode){
      response = this.usuariosService.updateUsuario(
        this.usuario.id, 
        this.form.value
      );
    } else {
  response = this.usuariosService
      .addUsuario(this.form.value);
    }

  
    response.pipe(take(1)).subscribe((usuario) => {
      this.form.reset();
      Loading.dismiss();

      if(this.isEditMode){
        this.closeModal();
      }
    });
  }
}
