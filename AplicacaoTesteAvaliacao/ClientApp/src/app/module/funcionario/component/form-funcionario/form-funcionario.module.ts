import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { FormFuncionarioComponent } from './form-funcionario.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [FormFuncionarioComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule
  ], exports:[FormFuncionarioComponent],
  entryComponents:[FormFuncionarioComponent]
})
export class FormFuncionarioModule { }
