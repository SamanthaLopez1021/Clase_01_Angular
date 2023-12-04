import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { RecuperarContraComponent } from './recuperar-contra/recuperar-contra.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'registrarse',component:RegistrarseComponent},
  {path:'',component:RecuperarContraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
