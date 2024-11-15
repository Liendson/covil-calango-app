import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericClass } from 'src/app/model/generic.class';
import { JogadorDTO } from 'src/app/model/jogador.dto';
import { KEY_USUARIO, StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-modal-editar-perfil',
  templateUrl: './modal-editar-perfil.page.html',
  styleUrls: ['./modal-editar-perfil.page.scss'],
})
export class ModalEditarPerfilPage extends GenericClass implements OnInit {

  public formPerfil: FormGroup;
  public usuario: JogadorDTO;

  constructor(
    public injector: Injector,
    private formBuilder: FormBuilder,
    private storageService: StorageService
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.configurarForm();
  }

  configurarForm() {
    this.usuario = this.storageService.get(KEY_USUARIO);
    this.formPerfil = this.formBuilder.group({
      nome: [this.usuario.nome, Validators.required],
      apelido: [''],
      contato: [''],
      time: ['']
    });
  }

  async salvarPerfil() {
    (await this.alertController.create({
      message: 'Perfil salvo com sucesso!',
      buttons: ['OK']
    })).present().then(() => this.modalController.dismiss());
  }

}
