import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HamburguerComponent } from './pages/hamburguer/hamburguer.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { BebidaComponent } from './pages/bebida/bebida.component';
import { PorcaoComponent } from './pages/porcao/porcao.component';


import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { PainelAdmComponent } from './pages/auth/adm/painel-adm/painel-adm.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RecuperarSenhaComponent } from './pages/auth/recuperar-senha/recuperar-senha.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'hamburguer', component: HamburguerComponent },
    { path: 'pizza', component: PizzaComponent },
    { path: 'bebida', component: BebidaComponent },
    { path: 'porcao', component: PorcaoComponent },
    
    { path: 'login', component: LoginComponent },
    { path: 'recuperar-senha', component: RecuperarSenhaComponent },
    { path: 'painel-adm', component: PainelAdmComponent, canActivate: [AuthGuardService] }
];