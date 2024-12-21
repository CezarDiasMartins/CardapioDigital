import { Component } from '@angular/core';
import { FormControl, FormGroup, FormRecord, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormComponent } from "../../../components/form/form.component";
import { InputComponent } from "../../../components/input/input.component";
import { LoginService } from '../../../services/login/login.service';
import { Meta, Title } from '@angular/platform-browser';

interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormComponent, 
    InputComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup<LoginForm>;

  constructor(private meta: Meta, private titleService: Title, private router: Router, private loginService: LoginService){
    this.titleService.setTitle('Login');
    this.meta.updateTag({
      name: 'description',
      content: 'Faça seu Login para ter acesso ao Painel Administrativo!'
    });

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => console.log("Login feito com sucesso!"),
      error: () => console.log("Erro inesperado! Tente novamente mais tarde")
    })
  }

  navigate(){
    this.router.navigate(["painel-adm"])
  }
}
