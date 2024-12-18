import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericClass } from 'src/app/model/generic.class';
import { JogadorDTO } from 'src/app/model/jogador.dto';
import { UsuarioService } from 'src/app/services/usuario.service';
import { KEY_USUARIO, StorageService } from 'src/app/services/storage.service';
import { UsuarioDTO } from 'src/app/model/usuario.dto';

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
    private storageService: StorageService,
    private usuarioService: UsuarioService
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.configurarForm();
  }

  configurarForm() {
    this.usuario = this.storageService.get(KEY_USUARIO);
    this.formPerfil = this.formBuilder.group({
      id: [this.usuario.id, Validators.required],
      nome: [this.usuario.nome, Validators.required],
      contato: [this.usuario.contato],
    });
  }

  async salvarPerfil() {
    this.usuarioService.save(this.formPerfil.getRawValue()).subscribe(async (usuario: UsuarioDTO) =>
      (await this.alertController.create({
        message: 'Perfil salvo com sucesso!',
        buttons: ['OK']
      })).present().then(() => {
        this.modalController.dismiss();
        this.storageService.set(KEY_USUARIO, new JogadorDTO(1, usuario.nome, 10, 150, '10321997417', usuario.contato));
      })
    );
  }

}
