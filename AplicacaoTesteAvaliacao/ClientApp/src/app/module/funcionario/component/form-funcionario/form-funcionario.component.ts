import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Funcionario } from '../../modal/funcionario';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { FormatDatapiker, APP_DATE_FORMATS } from '../../pipe/format-datapiker';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-funcionario.component.html',
  styleUrls: ['./form-funcionario.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: FormatDatapiker},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})
export class FormFuncionarioComponent implements OnInit {

  form: FormGroup;
  CreateEdit: string;
  private fb: FormBuilder;
  private dialogRef: MatDialogRef<FormFuncionarioComponent>;
  constructor(fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: Funcionario, dialogRef: MatDialogRef<FormFuncionarioComponent>) {
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.dialogRef.disableClose = true;
  }


  public get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    if (!this.data) {
      this.CreateEdit = "Criando";
      this.form = this.fb.group({
        nome: ['', [Validators.required]],
        dataNasc: [new Date(), [Validators.required]],
        id: [''],
        email: ['', [Validators.required, Validators.email]],
        sexo: [false, Validators.required],
        habilidade:['', Validators.required],
        ativado: [true, Validators.required]
      })
    } else {
      this.CreateEdit = "Editando";
      this.form = this.fb.group({
        nome: [this.data.Nome, [Validators.required]],
        dataNasc: [this.data.DataNasc, [Validators.required]],
        id: [this.data.Id],
        email: [this.data.Email, [Validators.required, Validators.email]],
        sexo: [this.data.Sexo, Validators.required],
        habilidade:[this.data.Habilidade, Validators.required],
        ativado: [this.data.Ativado, Validators.required]
      })
    }
  }


  public Onsubmit() {
    this.dialogRef.close(this.MyObj());
  }

  public Close() {
    this.dialogRef.close(undefined);
  }


  private MyObj(): Funcionario {
    if (!this.data) {
      const newFunc = new Funcionario({
        nome: this.f.nome.value,
        dataNasc: this.f.dataNasc.value,
        email: this.f.email.value,
        habilidade: this.f.habilidade.value,
        id: 0,
        sexo: this.f.sexo.valid,
        ativar: this.f.ativado.value
      })
      return newFunc;
    } else {
      const editFunc = new Funcionario({
        nome: this.f.nome.value,
        dataNasc: this.f.dataNasc.value,
        email: this.f.email.value,
        habilidade: this.f.habilidade.value,
        sexo: this.f.sexo.value,
        id: this.f.id.value,
        ativar: this.f.ativado.value
      })
      return editFunc;
    }
  }

}
