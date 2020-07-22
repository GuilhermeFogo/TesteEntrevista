using AplicacaoTesteAvaliacao.Modal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AplicacaoTesteAvaliacao.Service.Interfaces
{
    public interface IFuncionarioService
    {
        void Criar(Funcionario funcionario);
        void Apagar(Funcionario funcionario);
        void Editar(Funcionario funcionario);
        List<Funcionario> VerFuncionarios();
    }
}
