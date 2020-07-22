import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../modal/funcionario';
import { environment } from 'src/environments/environment';
import { strict } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private readonly http: HttpClient;
  private readonly url: string;
  constructor(http: HttpClient) {
    this.http = http;
    this.url = environment.Funcionario.apiFunc + "api/Funcionarios/";
   }

   public  VerFuncionarios(): Observable<Funcionario[]>{
     return this.http.get<Funcionario[]>(this.url);
   }

   public  PostFuncionario(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.post<Funcionario>(this.url, funcionario);
  }

  public  PutFuncionario(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.put<Funcionario>(this.url, funcionario);
  }

  public  DeleteFuncionario(funcionario: Funcionario): Observable<Funcionario>{
    
    return this.http.delete<Funcionario>(this.url + funcionario.Id);
  }
  
}
