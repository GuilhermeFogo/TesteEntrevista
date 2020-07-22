import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FormFuncionarioModule } from 'src/app/module/funcionario/component/form-funcionario/form-funcionario.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    FormFuncionarioModule
  ], exports:[HomeComponent]
})
export class HomeModule { }
