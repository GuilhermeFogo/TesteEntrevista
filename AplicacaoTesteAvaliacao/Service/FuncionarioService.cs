using AplicacaoTesteAvaliacao.Modal;
using AplicacaoTesteAvaliacao.Repository.Interfaces;
using AplicacaoTesteAvaliacao.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AplicacaoTesteAvaliacao.Service
{
    public class FuncionarioService : IFuncionarioService
    {
        private  IRepositorioFuncionario repositorioFuncionario;
        public FuncionarioService(IRepositorioFuncionario repositorioFuncionario)
        {
            this.repositorioFuncionario = repositorioFuncionario;
        }


        public void Apagar(Funcionario funcionario)
        {
            this.repositorioFuncionario.Deletar(funcionario);
        }

        public void Criar(Funcionario funcionario)
        {
            this.repositorioFuncionario.Salvar(funcionario);
        }

        public void Editar(Funcionario funcionario)
        {
            this.repositorioFuncionario.Editar(funcionario);
        }

        public List<Funcionario> VerFuncionarios()
        {
           return this.repositorioFuncionario.VerTodos();
        }
    }
}
