using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AplicacaoTesteAvaliacao.Modal
{
    public class Funcionario
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public DateTime DataNacimento { get; set; }
        public string Email { get; set; }
        public bool Sexo { get; set; }
        public string Habilidade { get; set; }
        public bool Ativado { get; set; }


        public Funcionario(int id, string nome, DateTime dataNasc, string email, bool sexo, string habilidade, bool ativado)
        {
            this.Id = id;
            this.Nome = nome;
            this.DataNacimento = dataNasc;
            this.Email = email;
            this.Sexo = sexo;
            this.Habilidade = habilidade;
            this.Ativado = ativado;
        }

        public Funcionario()
        {

        }
    }
}
