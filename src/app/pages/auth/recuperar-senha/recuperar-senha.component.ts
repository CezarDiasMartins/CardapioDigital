import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormComponent } from "../../../components/form/form.component";
import { InputComponent } from '../../../components/input/input.component';
import { LoginService } from '../../../services/login/login.service';
import { Meta, Title } from '@angular/platform-browser';

interface RecuperarSenhaForm {
  email: FormControl
}

@Component({
  selector: 'app-recuperar-senha',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormComponent, 
    InputComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './recuperar-senha.component.html',
  styleUrl: './recuperar-senha.component.scss'
})
export class RecuperarSenhaComponent {
  recuperarSenhaForm!: FormGroup<RecuperarSenhaForm>;

  constructor(private meta: Meta, private titleService: Title, private router: Router, private loginService: LoginService){
    this.titleService.setTitle('Recuperar Senha');
    this.meta.updateTag({
      name: 'description',
      content: 'Insira as informações para recuperar a sua senha!'
    });

    this.recuperarSenhaForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  submit(){
    this.loginService.recuperarSenha(this.recuperarSenhaForm.value.email).subscribe({
      next: () => console.log("Login feito com sucesso!"),
      error: () => console.log("Erro inesperado! Tente novamente mais tarde")
    });
  }

  navigate(){
    this.router.navigate(["signup"]);
  }
}
