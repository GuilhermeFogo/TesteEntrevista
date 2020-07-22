import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { FormFuncionarioComponent } from 'src/app/module/funcionario/component/form-funcionario/form-funcionario.component';
import { Funcionario } from 'src/app/module/funcionario/modal/funcionario';
import { FuncionarioService } from 'src/app/module/funcionario/service/funcionario.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  datasouce: MatTableDataSource<Funcionario>;
  displayedColumns: string[] = ['Nome', 'Data Nasc', "Idade", "Email", "Sexo", "Habilidade", "Opcoes", "Edit"];
  private dialog: MatDialog;
  private service: FuncionarioService;

  constructor(dialog: MatDialog, service: FuncionarioService) {
    this.dialog = dialog;
    this.service = service;
  }

  //private teste : Funcionario[] = [
  // new Funcionario({id: 1, nome: "Guilherme",dataNasc: new Date(), email:"gui.fogo17@gmail.com", habilidade: "C#, Angular", sexo: true, ativar: true})
  //];
  ngOnInit(): void {
    // this.datasouce = new MatTableDataSource(this.teste);
    this.GetFuncionario();
  }

  public OpenDialog() {
    this.dialog.open(FormFuncionarioComponent, {
      width: '600px',
      data: null
    }).afterClosed().subscribe(func => {
      this.postFuncionario(func)
      this.GetFuncionario();

      console.log(func);

    })
  }


  public EditDialog(Funcionario: Funcionario) {
    this.dialog.open(FormFuncionarioComponent, {
      width: '600px',
      data: Funcionario
    }).afterClosed().subscribe(func => {
      this.putFuncionario(func);
      this.GetFuncionario();

      console.log(func);

    })
  }

  public CalculateIdade(item: Date) {
    return item.getFullYear() - new Date().getFullYear();
  }

  public formatDate(item: Date) {
    return item.toLocaleDateString();
  }
  public deletaFuncionario(funcionario: Funcionario) {
    this.deleteFuncionario(funcionario);
  }



  private GetFuncionario() {
    this.service.VerFuncionarios().subscribe(x => {
      this.datasouce = new MatTableDataSource(x);
    }, error => console.log(error));
  }

  private putFuncionario(Funcionario: Funcionario) {
    this.service.PutFuncionario(Funcionario).subscribe(x => {
      console.log("Atualização realizada com exito");
    }, error => console.error(error))
  }

  private postFuncionario(Funcionario: Funcionario) {
    this.service.PostFuncionario(Funcionario).subscribe(x => {
      console.log("Inserção realizada com exito");
    }, error => console.error(error))
  }

  private deleteFuncionario(funcionario: Funcionario) {
    this.service.DeleteFuncionario(funcionario).subscribe(x => {
      console.log("Apagou o Funcionario com exito");
    }, error => console.error(error))
  }
}
