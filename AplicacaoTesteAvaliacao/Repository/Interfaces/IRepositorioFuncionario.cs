using AplicacaoTesteAvaliacao.Modal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AplicacaoTesteAvaliacao.Repository.Interfaces
{
    public interface IRepositorioFuncionario
    {
        void Salvar(Funcionario funcionario);
        void Editar(Funcionario funcionario);
        void Deletar(Funcionario funcionario);

        List<Funcionario> VerTodos();

        Funcionario VerFuncionario(int index);
    }

}
