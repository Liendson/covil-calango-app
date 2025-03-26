import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericClass } from 'src/app/model/generic.class';
import { JogadorDTO } from 'src/app/model/jogador.dto';
import { KEY_USUARIO, StorageService } from 'src/app/services/storage.service';
import { ComandaService } from 'src/app/services/comanda.service';

@Component({
  selector: 'app-modal-informar-nome',
  templateUrl: './modal-informar-nome.page.html',
  styleUrls: ['./modal-informar-nome.page.scss'],
})
export class ModalInformarNomePage extends GenericClass implements OnInit {

  public form: FormGroup;
  public usuario: JogadorDTO;

  constructor(
    public injector: Injector,
    private formBuilder: FormBuilder,
    private storageService: StorageService,
    private comandaService: ComandaService,
  ) {
    super(injector);
  }

  get nome() {
    return this.form.get('nome').value;
  }

  ngOnInit(): void {
    this.configurarForm();
  }

  configurarForm() {
    this.form = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
    });
  }

  gerarNumeroComanda() {
    this.comandaService.gerarComanda(this.nome).subscribe(res => {
      const jogadorDTO: JogadorDTO = new JogadorDTO(1, null, null, res.usuario, res);
      this.storageService.set(KEY_USUARIO, jogadorDTO);
      this.modalController.dismiss();
      this.router.navigate(['/home']);
    });
  }

}
