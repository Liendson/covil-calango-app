import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JogadorDTO } from 'src/app/model/jogador.dto';
import { KEY_USUARIO, StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  realizarLogin() {
    // TODO: Remover Mock
    this.storageService.set(KEY_USUARIO, new JogadorDTO(1, 'Liendson Douglas', 10, 150, '10321997417'));
    this.router.navigate(['/home']);
  }

  gerarNumeroComanda() {
    // TODO: Remover Mock
    this.storageService.set(KEY_USUARIO, new JogadorDTO(1, 'Liendson Douglas', 10, 150, '10321997417'));
    this.router.navigate(['/home']);
  }

}
